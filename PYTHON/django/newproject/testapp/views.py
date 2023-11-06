# from django.shortcuts import render
#
# from django.shortcuts import render, redirect
# from .forms import StudentForm
# from .models import Student, University, StudentUniversityAssignment, ProgramOfStudy
#
#
# def school_selection(request):
#     if request.method == 'POST':
#         form = StudentForm(request.POST)
#         if form.is_valid():
#             # Get the selected program name from the form
#             program_name = form.cleaned_data['chosen_program']
#
#             # Try to find the corresponding ProgramOfStudy instance
#             try:
#                 program_of_study = ProgramOfStudy.objects.get(program_name=program_name)
#                 print(program_of_study)
#             except ProgramOfStudy.DoesNotExist:
#                 program_of_study = None
#
#             # Check if the program_of_study exists
#             if program_of_study:
#                 student = Student(
#                     student_name=form.cleaned_data['student_name'],
#                     student_score=form.cleaned_data['student_score'],
#                     chosen_program=program_of_study  # Assign the ProgramOfStudy instance
#                 )
#                 student.save()
#
#                 assignment = StudentUniversityAssignment(student=student)
#                 assigned_university = assignment.assign_student_to_university()
#
#                 if assigned_university:
#                     return render(request, 'testapp/success.html', {'student': student, 'university': assigned_university})
#                 else:
#                     return render(request, 'testapp/failure.html')
#             else:
#                 # Handle the case where the selected program doesn't exist
#                 return render(request, 'testapp/invalid_program.html')
#     else:
#         form = StudentForm()
#
#     return render(request, 'testapp/school_selection.html', {'form': form})

from django.shortcuts import render, redirect
from .forms import StudentForm
from .models import Student, StudentUniversityAssignment, ProgramOfStudy


def school_selection(request):
    if request.method == 'POST':
        form = StudentForm(request.POST)
        if form.is_valid():
            program_name = form.cleaned_data['chosen_program']

            try:
                program_of_study = ProgramOfStudy.objects.get(program_name=program_name)
            except ProgramOfStudy.DoesNotExist:
                program_of_study = None

            if program_of_study:
                student = Student(
                    student_name=form.cleaned_data['student_name'],
                    student_score=form.cleaned_data['student_score'],
                    chosen_program=program_of_study  # Assign the ProgramOfStudy instance
                )
                student.save()

                assignment = StudentUniversityAssignment.assign_student_to_university(student)

                if assignment:
                    return render(request, 'testapp/success.html', {'student': student, 'university': assignment})
                else:
                    return render(request, 'testapp/failure.html')
            else:
                return render(request, 'testapp/invalid_program.html')
    else:
        form = StudentForm()

    return render(request, 'testapp/school_selection.html', {'form': form})
