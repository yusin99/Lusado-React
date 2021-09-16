from django_restql.mixins import QueryArgumentsMixin
from rest_framework import viewsets
import rest_framework_filters

from api.serializers import ProductSerializer, CategorySerializer, BrandSerializer, StateSerializer
from core.models import Product, Category, Brand, State


class ListFilter(rest_framework_filters.Filter):
    def filter(self, qs, value):
        if value is not None and ',' not in value:
            value_list = [value]
        elif value is not None:
            value_list = value.split(u',')
        else:
            return qs
        return super(ListFilter, self).filter(qs, value_list)


class ProductFilter(rest_framework_filters.FilterSet):
    # feature_name = ListFilter(field_name="configurations__value__feature__name", lookup_expr="in")
    # value_name = ListFilter(field_name="configurations__value__name", lookup_expr="in")

    class Meta:
        model = Product
        fields = ['name', 'category__name', 'brand__name',
                  'configurations__value__name', 'configurations__value__feature__name']


class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filterset_class = ProductFilter
    filter_backends = (rest_framework_filters.backends.ComplexFilterBackend,)
    # filter_fields = {
    #     'name': ['iexact'],
    #     'category__name': ['iexact'],
    #     'brand__name': ['iexact'],
    #     'configurations__value__feature__name': ['exact'],
    #     'configurations__value__name': ['exact', 'in'],
    # }


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class BrandViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer


class StateViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = State.objects.all()
    serializer_class = StateSerializer
