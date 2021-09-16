from django.db import models


# Create your models here.


class Value(models.Model):
    name = models.CharField(max_length=60)
    canonical_name = models.CharField(max_length=60, unique=True, db_index=True)
    description = models.TextField(default=None, null=True, blank=True)

    def __str__(self):
        return self.name


class Feature(models.Model):
    name = models.CharField(max_length=60, db_index=True, unique=True)
    possible_values = models.ManyToManyField(Value)
    icon = models.CharField(max_length=50, default=None, blank=True, null=True)
    iconType = models.CharField(max_length=50, default=None, blank=True, null=True)

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=60, db_index=True)
    parent = models.ForeignKey('self', on_delete=models.CASCADE, default=None, blank=True,
                               null=True)
    icon = models.CharField(max_length=50, default=None, blank=True, null=True)
    iconType = models.CharField(max_length=50, default=None, blank=True, null=True)
    features = models.ManyToManyField(Feature)

    def __str__(self):
        return self.name


class Configuration(models.Model):
    feature = models.ForeignKey(Feature, on_delete=models.CASCADE)
    value = models.ForeignKey(Value, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.feature} - {self.value}'


class Photo(models.Model):
    url = models.URLField()


class State(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()

    def __str__(self):
        return self.name


class Brand(models.Model):
    name = models.CharField(max_length=50)


class Product(models.Model):
    name = models.CharField(max_length=1024)
    description = models.TextField()
    configurations = models.ManyToManyField(Configuration)
    created_on = models.DateTimeField(auto_now_add=True)
    photos = models.ManyToManyField(Photo)
    price_without_shipping_costs = models.DecimalField(default=0.0, max_digits=6, decimal_places=2)
    state = models.ForeignKey(State, on_delete=models.CASCADE, default=None)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE, default=None)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, default=None, null=True)

    def __str__(self):
        return self.name
