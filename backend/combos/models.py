from django.db import models
from users.models import User


CHOICES = (
    ('Y', 'youtube'),
    ('T', 'twitch'),
)


class Character(models.Model):
    name = models.CharField(
        'Персонаж',
        help_text='Введите имя персонажа',
        max_length=64,
        unique=True)
    image = models.ImageField(
        upload_to='charactes/images/',
        null=True,
        default=None
    )

    class Meta:
        verbose_name = 'Персонаж'
        verbose_name_plural = 'Персонажи'
        ordering = 'name',

    def __str__(self):
        return self.name


class Kameo(models.Model):
    name = models.CharField(
        'Камео',
        help_text='Введите имя камео',
        max_length=64,
        unique=True)
    image = models.ImageField(
        upload_to='kameos/images/',
        null=True,
        default=None
    )

    class Meta:
        verbose_name = 'Камео'
        verbose_name_plural = 'Камео'
        ordering = 'name',

    def __str__(self):
        return self.name


class Tag(models.Model):
    name = models.CharField(
        'Тэг',
        help_text='Введите название тэга',
        max_length=64,
        unique=True)
    color = models.CharField(
        'Цвет тэга',
        max_length=7,
        unique=True)
    slug = models.SlugField(
        'Слаг тэга',
        unique=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Тэг"
        verbose_name_plural = "Тэги"


class Combo(models.Model):
    title = models.CharField(max_length=80)
    input = models.CharField(max_length=480)
    clip = models.CharField(max_length=120)
    clip_source = models.CharField(
        max_length=80, choices=CHOICES, default="twitch")
    author = models.ForeignKey(
        User,
        related_name='combos',
        on_delete=models.CASCADE
    )
    created = models.DateTimeField('Дата создания тодухи', auto_now_add=True)
    character = models.ForeignKey(
        Character,
        related_name='character_combos',
        on_delete=models.CASCADE
    )
    kameo = models.ForeignKey(
        Kameo,
        related_name='kameo_combos',
        on_delete=models.CASCADE
    )
    tags = models.ManyToManyField(
        Tag,
        verbose_name='Тэги',
        related_name="combos",
    )

    class Meta:
        verbose_name = 'Комбо'
        verbose_name_plural = 'Комбы'
        ordering = 'character__name',

    def __str__(self):
        return self.title


class FavoriteCombo(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='favorite_combos',
        verbose_name='Подписчик'
    )
    combo = models.ForeignKey(
        Combo,
        on_delete=models.CASCADE,
        related_name='favorite',
        verbose_name='Комбо'
    )

    class Meta:
        verbose_name = "Избранное комбо"
        verbose_name_plural = "Избранные комбы"
        constraints = [
            models.UniqueConstraint(
                fields=['user', 'combo'],
                name='unique_favorite_user_combo'
            )
        ]
