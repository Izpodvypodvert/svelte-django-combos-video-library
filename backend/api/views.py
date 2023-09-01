from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, DjangoModelPermissions, AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response

from django_filters.rest_framework import DjangoFilterBackend

from djoser.views import UserViewSet as DjoserViewSet

from api.filters import ComboFilter
from api.permissions import (IsAdminOrReadOnly, IsAuthorOrAdminOrReadOnly,
                             IsUserNotBanned)
from api.serializers import (
    FavoriteSerializer, UserSerializer, CharacterSerializer, KameoSerializer, ComboSerializer, TagSerializer)
from api.utils import add_combo, delete_combo
from combos.models import Character, Combo, FavoriteCombo, Kameo, Tag
from users.models import User


class TagViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    permission_classes = (IsAdminOrReadOnly, IsUserNotBanned)


class CharactersViewSet(viewsets.ModelViewSet):
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer
    permission_classes = (IsAdminOrReadOnly, IsUserNotBanned)


class KameosViewSet(viewsets.ModelViewSet):
    queryset = Kameo.objects.all()
    serializer_class = KameoSerializer
    permission_classes = (IsAdminOrReadOnly, IsUserNotBanned)


class ComboViewSet(viewsets.ModelViewSet):
    queryset = Combo.objects.all()
    serializer_class = ComboSerializer
    permission_classes = (IsAuthorOrAdminOrReadOnly, IsUserNotBanned)
    filter_backends = (DjangoFilterBackend,)
    filterset_class = ComboFilter

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    @action(detail=True, permission_classes=(IsAuthenticated, IsUserNotBanned))
    def favorite(self, request, pk):
        """Избранные комбо."""

    @favorite.mapping.post
    def recipe_to_favorites(self, request, pk):
        """Добавляет комбо в избранное."""

        combo = get_object_or_404(Combo, id=pk)
        return add_combo(request, combo, FavoriteSerializer)

    @favorite.mapping.delete
    def remove_recipe_from_favorites(self, request, pk):
        """Удаляет комбо из избранного."""

        combo = get_object_or_404(Combo, id=pk)
        return delete_combo(request, FavoriteCombo, combo)


class UserViewSet(DjoserViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (DjangoModelPermissions,)
