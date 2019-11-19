from django.db import models
# #NEW
# from django.views.decorators.csrf import csrf_protect
# from django.utils.decorators import method_decorator

# @method_decorator(csrf_protect)
# def post(self, request):
#     return Response()
# #NEW
class Assignment(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()

    def __str__(self):
        return self.title

class Lessons(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    assignment = models.ForeignKey(Assignment, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class Choice (models.Model):
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title


class Question (models.Model):
    question = models.CharField(max_length=100)
    choices = models.ManyToManyField(Choice)
    answer = models.ForeignKey(
        Choice, on_delete=models.CASCADE, related_name='answer')
    lessons = models.ForeignKey(Lessons, on_delete=models.CASCADE)
    order = models.SmallIntegerField()

    def __str__(self):
        return self.question

