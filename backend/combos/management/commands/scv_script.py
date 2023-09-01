import csv

from django.conf import settings
from django.core.management import BaseCommand
from django.db import IntegrityError


from combos.models import (

    Tag, Character, Kameo, Combo, FavoriteCombo, ComboTags
)

from users.models import User

TABLES = {
    Tag: 'tags.csv',
    Character: 'characters.csv',
    Kameo: 'kameos.csv',
    User: 'users.csv',
    Combo: 'combos.csv',
    FavoriteCombo: 'favoritecombos.csv',
    ComboTags: 'combo_tags.csv',
}


class Command(BaseCommand):
    """Загрузка данных из папки static/data."""

    def handle(self, *args, **kwargs):
        for model, csv_f in TABLES.items():
            with open(
                    f'{settings.BASE_DIR}/combos/data/{csv_f}',
                    'r',
                    encoding='utf-8'
            ) as csv_file:
                reader = csv.DictReader(csv_file)
                try:
                    model.objects.bulk_create(
                        model(**data) for data in reader)
                except IntegrityError:
                    self.stdout.write(self.style.ERROR_OUTPUT(
                        'данные уже были загружены! Или ошибки в csv файлах!'))
                    continue
        self.stdout.write(self.style.SUCCESS('Все данные загружены'))
