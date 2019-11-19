from rest_framework import serializers

from assignment.models import Assignment, Lessons


class AssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assignment
        fields = ('id', 'title', 'content')

class LessonsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lessons
        fields = ('__all__')