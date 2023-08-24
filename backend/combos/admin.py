from django.contrib import admin
from django.utils.html import format_html

from combos.models import FavoriteCombo, Kameo, Character, Combo, Tag


class CharacterAdmin(admin.ModelAdmin):
    list_display = ['name', 'character_image']
    search_fields = ('name', )

    def character_image(self, obj):
        image_url = obj.image.url
        print(image_url)
        image_tag = f"<img src={image_url} width='75' hieght='50'/>"
        return format_html(image_tag)


class KameoAdmin(admin.ModelAdmin):
    list_display = ['name', 'kameo_image']
    search_fields = ('name', )

    def kameo_image(self, obj):
        image_url = obj.image.url
        image_tag = f"<img src={image_url} width='75' hieght='50' />"
        return format_html(image_tag)


class ComboAdmin(admin.ModelAdmin):
    list_display = ['title', 'character', 'kameo',
                    'in_favorite_recipes', 'character_image']
    list_filter = ['character', 'kameo', 'author__username', 'tags__name']
    search_fields = ('character__name', 'kameo__name',
                     'tags__name', 'author__username')

    def in_favorite_recipes(self, obj):
        return obj.favorite.count()

    in_favorite_recipes.short_description = 'В избранном'

    def character_image(self, obj):
        image_url = obj.character.image.url
        image_tag = f"<img src={image_url} width='75' hieght='50'/>"
        return format_html(image_tag)


class TagAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'color')
    search_fields = ('name', 'color')


class FavoriteComboAdmin(admin.ModelAdmin):
    list_display = ('user', 'combo', 'combo_image', 'combo_author')
    search_fields = ('user__username', 'combo__title')

    def combo_author(self, obj):
        return obj.combo.author.username

    combo_author.short_description = 'Автор'

    def combo_image(self, obj):
        image_url = obj.combo.character.image.url
        image_tag = f"<img src={image_url} width='75' hieght='50' />"
        return format_html(image_tag)

    combo_image.short_description = 'Персонаж'


admin.site.register(Tag, TagAdmin)
admin.site.register(FavoriteCombo, FavoriteComboAdmin)
admin.site.register(Kameo, KameoAdmin)
admin.site.register(Character, CharacterAdmin)
admin.site.register(Combo, ComboAdmin)
