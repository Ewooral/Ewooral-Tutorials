from django.contrib import admin
from .models import Student
from .models import Image
from .models import Course
from .models import Enrollment
from .models import Department
from .models import Faculty

# Register your models here.

admin.site.register(Student)
admin.site.register(Image)
admin.site.register(Course)
admin.site.register(Enrollment)
admin.site.register(Department)
admin.site.register(Faculty)