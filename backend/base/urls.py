from django.urls import path
from . import views
urlpatterns=[ 
    path('',views.getRoutes,name='get-routes'),
    path('notes/',views.getNotes,name='notes'),
    path('note/<int:pk>/',views.getNote,name='note'),
    path('update/<int:pk>/',views.updateNote,name='update-note'),
    path('delete/<int:pk>/',views.deleteNote,name='delete-note'),
    path('create/',views.createNote,name='create-note')
]