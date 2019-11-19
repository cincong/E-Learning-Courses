from rest_framework.generics import (ListAPIView,RetrieveAPIView, CreateAPIView, DestroyAPIView,UpdateAPIView)
from rest_framework import permissions
from assignment.models import Assignment, Lessons
from .serializers import AssignmentSerializer, LessonsSerializer

class AssignmentListView(ListAPIView):
    queryset = Assignment.objects.all()
    serializer_class = AssignmentSerializer
    permission_classes = (permissions.AllowAny, )
   

class AssignmentDetailView(RetrieveAPIView):
    queryset = Assignment.objects.all()
    serializer_class = AssignmentSerializer
    permission_classes = (permissions.AllowAny, )

class AssignmentCreateView(CreateAPIView):
    queryset = Assignment.objects.all()
    serializer_class = AssignmentSerializer

class AssignmentUpdateView(UpdateAPIView):
    queryset = Assignment.objects.all()
    serializer_class = AssignmentSerializer
   
class AssignmentDeleteView(DestroyAPIView):
    queryset = Assignment.objects.all()
    serializer_class = AssignmentSerializer



class LessonsListView(ListAPIView):
    queryset = Lessons.objects.all()
    serializer_class = LessonsSerializer
    permission_classes = (permissions.AllowAny, )
   

class LessonsDetailView(RetrieveAPIView):
    queryset = Lessons.objects.all()
    serializer_class = LessonsSerializer
    permission_classes = (permissions.AllowAny, )

class LessonsCreateView(CreateAPIView):
    queryset = Lessons.objects.all()
    serializer_class = LessonsSerializer
    
    