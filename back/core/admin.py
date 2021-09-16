from django.contrib import admin

# Register your models here.
from core.models import Product, Category, Feature, Value, Configuration, State, Brand, Photo

admin.site.register(Category)
admin.site.register(Feature)
admin.site.register(Value)
admin.site.register(Configuration)
admin.site.register(State)
admin.site.register(Photo)
admin.site.register(Brand)


# class ConfigurationInline(admin.TabularInline):
#     model = Configuration
#
#
# #    extra = 2 # how many rows to show
#
# class ProductAdmin(admin.ModelAdmin):
#     inlines = (ConfigurationInline,)


admin.site.register(Product)
