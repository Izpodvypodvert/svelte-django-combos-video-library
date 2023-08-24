from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import permissions
from rest_framework import routers
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


from api.views import CharactersViewSet, ComboViewSet, UserViewSet, KameosViewSet, TagViewSet

app_name = 'api'

router_v1 = routers.DefaultRouter()
router_v1.register("tags", TagViewSet, "tags")
router_v1.register('combos', ComboViewSet)
router_v1.register("users", UserViewSet, "users")
router_v1.register("characters", CharactersViewSet)
router_v1.register("kameos", KameosViewSet)

urlpatterns = [
    path('v1/', include(router_v1.urls)),
    path('v1/', include('djoser.urls.authtoken')),
]


schema_view = get_schema_view(
    openapi.Info(
        title="MK1 combos API",
        default_version='v1',
        description="Документация для api проекта MK1 combos",
        contact=openapi.Contact(email="izalbu@yandex.ru"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)

urlpatterns += [
    re_path(r'^swagger(?P<format>\.json|\.yaml)$',
            schema_view.without_ui(cache_timeout=0), name='schema-json'),
    re_path(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0),
            name='schema-swagger-ui'),
    re_path(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0),
            name='schema-redoc'),
]
