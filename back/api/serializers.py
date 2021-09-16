from django_restql.mixins import DynamicFieldsMixin
from rest_framework import serializers

from core.models import Product, Brand, Configuration, Feature, Value, Category, Photo, State


class ValueSerializer(DynamicFieldsMixin, serializers.ModelSerializer):
    class Meta:
        model = Value
        fields = '__all__'


class FeatureSerializer(DynamicFieldsMixin, serializers.ModelSerializer):
    possible_values = ValueSerializer(many=True)

    class Meta:
        model = Feature
        fields = '__all__'


class CategorySerializer(DynamicFieldsMixin, serializers.ModelSerializer):
    features = FeatureSerializer(many=True)

    class Meta:
        model = Category
        fields = '__all__'

class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = '__all__'

class StateSerializer(serializers.ModelSerializer):
    class Meta:
        model = State
        fields = '__all__'


class BrandSerializer(DynamicFieldsMixin, serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = '__all__'


class ConfigurationSerializer(DynamicFieldsMixin, serializers.ModelSerializer):
    feature = FeatureSerializer()
    value = ValueSerializer()

    class Meta:
        model = Configuration
        fields = '__all__'





class ProductSerializer(DynamicFieldsMixin, serializers.ModelSerializer):
    brand = BrandSerializer(many=False, read_only=True)
    category = CategorySerializer(many=False, read_only=True)
    configurations = ConfigurationSerializer(many=True, allow_null=True)
    photos = PhotoSerializer(many=True)
    state = StateSerializer()

    class Meta:
        model = Product
        fields = '__all__'
