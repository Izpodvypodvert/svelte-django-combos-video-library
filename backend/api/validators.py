from rest_framework.serializers import ValidationError
from combos.models import Tag


def tags_validator(tag_ids):
    """Проверяет корректность указанных тегов."""

    if not tag_ids:
        raise ValidationError('Не указаны теги')
    valid_tags = Tag.objects.filter(id__in=tag_ids)
    if len(tag_ids) != len(valid_tags):
        raise ValidationError('Указан некорректный тег')
    return valid_tags
