from django.urls import path,include
from . import views
urlpatterns = [
    path("flood/", views.get_flood_prediction,name="flood_predictions"),
]
