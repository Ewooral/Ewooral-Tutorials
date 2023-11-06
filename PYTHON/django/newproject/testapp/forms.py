from django import forms


class StudentForm(forms.Form):
    student_name = forms.CharField(max_length=255)
    student_score = forms.FloatField()
    chosen_program = forms.CharField(max_length=255, required=False)


