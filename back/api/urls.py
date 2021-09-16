from django.urls import include, path
from rest_framework.routers import DefaultRouter

from api import views

router = DefaultRouter()
router.register(r'product', views.ProductViewSet)
router.register(r'category', views.CategoryViewSet)
router.register(r'brand', views.BrandViewSet)
router.register(r'state', views.StateViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
