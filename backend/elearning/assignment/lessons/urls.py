from django.urls import path
from assignment.api.views import (LessonsListView, LessonsCreateView, LessonsDetailView)

urlpatterns = [
    path('', LessonsListView.as_view()),
    path('<pk>', LessonsDetailView.as_view()),
    path('create/', LessonsCreateView.as_view())
]