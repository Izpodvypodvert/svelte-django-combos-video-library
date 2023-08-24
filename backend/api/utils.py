from rest_framework import status
from rest_framework.response import Response


class ReadOnlyFieldsMixin:
    """Миксин для сериализаторов.
      Делает все поля - полями только для чтения."""

    def get_fields(self):
        fields = super().get_fields()
        for field in fields.values():
            field.read_only = True
        return fields


def add_combo(request, combo, serializer_name):
    """Добавляет комбо в избранное."""

    serializer = serializer_name(
        data={'combo': combo.id,
              'user': request.user.id},
        context={'request': request})
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data, status=status.HTTP_201_CREATED)


def delete_combo(request, model, combo):
    """Удаляет комбо из избранного."""

    if not model.objects.filter(combo=combo, user=request.user).exists():
        return Response({'errors': 'Комбо отсутствует.'},
                        status=status.HTTP_400_BAD_REQUEST)
    model.objects.filter(combo=combo, user=request.user).delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
