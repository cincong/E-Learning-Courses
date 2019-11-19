from django.contrib import admin

from .models import Choice, Question, Assignment, Lessons

admin.site.register(Assignment)
admin.site.register(Choice)
admin.site.register(Question)
admin.site.register(Lessons)