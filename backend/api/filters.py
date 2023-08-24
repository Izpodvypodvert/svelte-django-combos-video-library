from django_filters.rest_framework import FilterSet, filters

from combos.models import Combo, Tag


class ComboFilter(FilterSet):
    """Фильтр для комбо."""

    title = filters.CharFilter(lookup_expr='icontains')

    is_favorited = filters.BooleanFilter(
        method='get_is_favorited'
    )
    tags = filters.ModelMultipleChoiceFilter(
        queryset=Tag.objects.all(),
        field_name='tags__slug',
        to_field_name='slug',
    )

    class Meta:
        model = Combo
        fields = ('author', 'tags', 'is_favorited',
                  'title', 'character__name', 'kameo__name')

    def get_is_favorited(self, queryset, name, value):
        user = self.request.user
        if value and user.is_authenticated:
            return queryset.filter(favorite__user=user)
        return queryset
