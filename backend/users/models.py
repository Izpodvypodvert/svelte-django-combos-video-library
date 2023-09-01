from django.contrib.auth.models import AbstractUser
from django.db import models


ADMIN = 'admin'
USER = 'user'
BANNED = 'banned'

ROLES_CHOICES = [
    (ADMIN, ADMIN),
    (USER, USER),
    (BANNED, BANNED),
]


class User(AbstractUser):
    first_name = None
    last_name = None
    email = models.EmailField('Электронная почта',
                              unique=True,
                              max_length=254,
                              error_messages={
                                  'unique': (
                                      'Пользователь с такой почтой уже '
                                      'существует.'),
                              }, )

    role = models.CharField(
        'Роль',
        max_length=9,
        choices=ROLES_CHOICES,
        default='user',
    )

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'
        ordering = 'username',

    def __str__(self):
        return f'{self.username}: {self.email}'
