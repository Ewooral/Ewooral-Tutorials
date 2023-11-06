from django.contrib import admin
from .models import Student, University, StudentUniversityAssignment, ProgramOfStudy

# Register your models here.

admin.site.register(ProgramOfStudy)
admin.site.register(Student)
admin.site.register(University)
admin.site.register(StudentUniversityAssignment)
