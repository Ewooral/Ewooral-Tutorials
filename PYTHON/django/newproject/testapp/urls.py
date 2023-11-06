from django.urls import path
from . import views

urlpatterns = [
    path('school-selection/', views.school_selection, name='school_selection'),
    # Add more URL patterns as needed.
]
