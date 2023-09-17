from django.db import models


# Create your models here.
class Image(models.Model):
    image_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='images/%Y/%m/%d/')

    def __str__(self):
        return self.name


class Student(models.Model):
    student_id = models.IntegerField(primary_key=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = models.CharField(max_length=255)
    date_of_birth = models.DateField()
    high_school_number = models.CharField(max_length=255)
    high_school_gpa = models.DecimalField(max_digits=5, decimal_places=2)
    standardized_test_scores = models.CharField(max_length=255)
    image = models.ForeignKey(Image, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'


class Course(models.Model):
    course_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Enrollment(models.Model):
    enrollment_id = models.IntegerField(primary_key=True)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    grade = models.CharField(max_length=255)

    def __str__(self):
        return f'{self.student.first_name} {self.student.last_name} is enrolled in {self.course.name}'


class Department(models.Model):
    department_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    department_head = models.ForeignKey(Student, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Faculty(models.Model):
    faculty_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)

    def __str__(self):
        return self.name