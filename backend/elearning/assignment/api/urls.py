from django.urls import path

from .views import (
    AssignmentListView,
    AssignmentCreateView,
    AssignmentDetailView,
    AssignmentUpdateView,
    AssignmentDeleteView
   
)

urlpatterns = [
    path('', AssignmentListView.as_view()),
    path('create/', AssignmentCreateView.as_view()),
    path('<pk>', AssignmentDetailView.as_view()),
    path('<pk>/update/', AssignmentUpdateView.as_view()),
    path('<pk>/delete/', AssignmentDeleteView.as_view())
   
]