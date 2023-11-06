# from django.db import models
#
#
# class ProgramOfStudy(models.Model):
#     program_id = models.AutoField(primary_key=True)
#     program_name = models.CharField(max_length=255, choices=[
#         ("Computer Science", "Computer Science"),
#         ("Engineering", "Engineering"),
#         ("Business Administration", "Business Administration"),
#         ("Biology", "Biology"),
#         ("Psychology", "Psychology"),
#         ("History", "History"),
#         ("Mathematics", "Mathematics"),
#         ("English Literature", "English Literature"),
#         ("Physics", "Physics"),
#         ("Chemistry", "Chemistry"),
#         ("Economics", "Economics"),
#         ("Political Science", "Political Science"),
#         ("Sociology", "Sociology"),
#         ("Environmental Science", "Environmental Science"),
#         ("Art and Design", "Art and Design"),
#         ("Music", "Music"),
#         ("Medicine", "Medicine"),
#         ("Nursing", "Nursing"),
#         # Add more programs here as needed.
#     ])
#
#     def __str__(self):
#         return f" {self.program_name}"
#
#
# class Student(models.Model):
#     student_id = models.AutoField(primary_key=True)
#     student_name = models.CharField(max_length=255)
#     student_score = models.FloatField()
#     # chosen_program = models.CharField(max_length=255, blank=True, null=True)
#     chosen_program = models.ForeignKey(ProgramOfStudy, on_delete=models.SET_NULL, null=True, blank=True)
#
#     def __str__(self):
#         return f"{self.student_name}"
#     def determine_grade(self):
#         """Determines the student's grade based on their score."""
#         if self.student_score >= 90:
#             return "A"
#         elif self.student_score >= 80:
#             return "B"
#         elif self.student_score >= 70:
#             return "C"
#         elif self.student_score >= 60:
#             return "D"
#         else:
#             return "F"
#
#
# class University(models.Model):
#     university_id = models.AutoField(primary_key=True)
#     university_name = models.CharField(max_length=255)
#     university_grade = models.CharField(max_length=1)
#     total_slots = models.IntegerField()
#     slots_filled = models.IntegerField(default=0)
#
#     def __str__(self):
#         return f" {self.university_name} "
#
#
# class StudentUniversityAssignment(models.Model):
#     assignment_id = models.AutoField(primary_key=True)
#     student = models.ForeignKey(Student, on_delete=models.CASCADE)
#     university = models.ForeignKey(University, on_delete=models.CASCADE)
#     program_id = models.CharField(max_length=255)
#
#     def __str__(self):
#         return f" {self.assignment_id} | {self.student} | {self.university} | {self.program_id} "
#
#     def assign_student_to_university(self):
#         student_grade = self.student.determine_grade()
#
#         suitable_universities = University.objects.filter(university_grade=student_grade).order_by('slots_filled')
#
#         if not suitable_universities:
#             suitable_universities = University.objects.filter(university_grade=chr(ord(student_grade) + 1)).order_by('slots_filled')
#
#         if suitable_universities:
#             assigned_university = suitable_universities[0]
#             if assigned_university.slots_filled < assigned_university.total_slots:
#                 self.university = assigned_university
#                 self.save()
#                 assigned_university.slots_filled += 1
#                 assigned_university.save()
#
#                 return assigned_university
#         return None
#
#
#


from django.db import models

class ProgramOfStudy(models.Model):
    program_id = models.AutoField(primary_key=True)
    program_name = models.CharField(max_length=255, choices=[
        ("Computer Science", "Computer Science"),
        ("Engineering", "Engineering"),
        ("Business Administration", "Business Administration"),
        ("Computer Science", "Computer Science"),
        ("Engineering", "Engineering"),
        ("Business Administration", "Business Administration"),
        ("Biology", "Biology"),
        ("Psychology", "Psychology"),
        ("History", "History"),
        ("Mathematics", "Mathematics"),
        ("English Literature", "English Literature"),
        ("Physics", "Physics"),
        ("Chemistry", "Chemistry"),
        ("Economics", "Economics"),
        ("Political Science", "Political Science"),
        ("Sociology", "Sociology"),
        ("Environmental Science", "Environmental Science"),
        ("Art and Design", "Art and Design"),
        ("Music", "Music"),
        ("Medicine", "Medicine"),
        ("Nursing", "Nursing"),
        # Add more programs here as needed.
    ])

    def __str__(self):
        return f" {self.program_name}"

class University(models.Model):
    university_id = models.AutoField(primary_key=True)
    university_name = models.CharField(max_length=255)
    university_grade = models.CharField(max_length=1, choices=[("A", "A"), ("B", "B"), ("C", "C")])
    total_slots = models.PositiveIntegerField()
    slots_filled = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.university_name}"

class Student(models.Model):
    student_id = models.AutoField(primary_key=True)
    student_name = models.CharField(max_length=255)
    student_score = models.FloatField()
    chosen_program = models.ForeignKey(ProgramOfStudy, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return f"{self.student_name}"

class StudentUniversityAssignment(models.Model):
    student_university_assignment_id = models.AutoField(primary_key=True)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    university = models.ForeignKey(University, on_delete=models.CASCADE)
    program = models.ForeignKey(ProgramOfStudy, on_delete=models.CASCADE)

    def __str__(self):
        return f" {self.student_university_assignment_id} | {self.student} | {self.university} | {self.program_id} "

    @classmethod
    def determine_student_grade(cls, student_score):
        if student_score >= 90:
            return "A"
        elif student_score >= 80:
            return "B"
        elif student_score >= 70:
            return "C"
        elif student_score >= 60:
            return "D"
        else:
            return "F"

    @classmethod
    def assign_student_to_university(cls, student):
        student_grade = cls.determine_student_grade(student.student_score)

        available_universities = []
        for university in University.objects.filter(university_grade=student_grade, slots_filled__lt=models.F('total_slots')):
            available_universities.append(university)

        if not available_universities:
            for university in University.objects.filter(university_grade=student_grade + str(1), slots_filled__lt=models.F('total_slots')):
                available_universities.append(university)

        if available_universities:
            assigned_university = available_universities[0]
            assignment = cls(student=student, university=assigned_university, program=student.chosen_program)
            assignment.save()

            assigned_university.slots_filled += 1
            assigned_university.save()

            return assigned_university

        return None
