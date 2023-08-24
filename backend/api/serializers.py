from rest_framework import serializers
from rest_framework.validators import UniqueTogetherValidator
from django.contrib.auth.hashers import make_password

from api.validators import tags_validator
from api.utils import ReadOnlyFieldsMixin
from combos.models import Character, Kameo, Combo, Tag, FavoriteCombo
from users.models import User


class TagSerializer(ReadOnlyFieldsMixin, serializers.ModelSerializer):
    """Сериализатор для модели Tag."""

    class Meta:
        model = Tag
        fields = '__all__'


class CharacterSerializer(serializers.ModelSerializer):

    class Meta:
        model = Character
        fields = 'id', 'name', 'image'
        read_only_fields = 'id', 'name', 'image'


class KameoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Kameo
        fields = 'id', 'name', 'image'
        read_only_fields = 'id', 'name', 'image'


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'email', 'username', 'password')

    def validate_password(self, value: str) -> str:
        return make_password(value)

    def create(self, validated_data):
        role = validated_data.get("role", 'user')
        users = {'user': {'is_staff': 0, 'is_superuser': 0},
                 'admin': {'is_staff': 1, 'is_superuser': 0},
                 }
        return User.objects.create(is_staff=users[role]['is_staff'],
                                   is_superuser=users[role]['is_superuser'],
                                   **validated_data)


class ComboSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)
    author = UserSerializer(read_only=True)
    character_name = serializers.ReadOnlyField(source='character.name')
    character = CharacterSerializer(read_only=True)
    kameo_name = serializers.ReadOnlyField(source='kameo.name')
    is_favorited = serializers.SerializerMethodField()

    class Meta:
        model = Combo
        fields = ('id', 'author', 'tags', 'title', 'input', 'clip', 'created', 'is_favorited',
                  'character_name', 'kameo_name', 'clip_source', 'character')
        read_only_fields = (
            'is_favorite',
            'created',
        )

    def get_is_favorited(self, combo):
        """Проверяет находится ли комбо в избранном."""

        request = self.context.get('request')
        if (request and hasattr(request, 'user')
                and request.user.is_authenticated):
            return request.user.favorite_combos.filter(combo=combo).exists()
        return False

    def create(self, validated_data):
        """Создаёт комбо."""

        tags = validated_data.pop('tags')
        combo = Combo.objects.create(**validated_data)
        combo.tags.set(tags)
        return combo

    def update(self, combo, validated_data):
        """Обновляет комбо."""

        tags = validated_data.pop('tags')
        combo.tags.clear()
        combo.tags.set(tags)
        super().update(combo, validated_data)
        combo.save()
        return combo

    def validate(self, data):
        """Проверяет теги и нормализует данные."""

        author = self.context.get('request').user
        tag_ids = self.initial_data.get('tags')

        tags = tags_validator(tag_ids)

        data.update({'author': author,
                     'tags': tags})
        return data


class ShortComboSerializer(ReadOnlyFieldsMixin, serializers.ModelSerializer):
    """Сериализатор для модели Recipe
    c укороченным набор полей"""

    class Meta:
        model = Combo
        fields = ('id', 'title', 'character',
                  'clip', 'kameo', 'clip_source', 'tags')


class FavoriteSerializer(serializers.ModelSerializer):
    """Сериализатор для работы с избранными комбами."""

    class Meta:
        model = FavoriteCombo
        fields = '__all__'
        validators = [
            UniqueTogetherValidator(queryset=FavoriteCombo.objects.all(),
                                    fields=('user', 'combo'),
                                    message='Комбо уже добавлен в избранное')
        ]

    def to_representation(self, favorite_combo):
        request = self.context.get('request')
        serializer = ShortComboSerializer(
            favorite_combo.combo,
            context={'request': request})
        return serializer.data
