# Generated by Django 4.2.5 on 2023-09-20 17:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('testapp', '0002_programofstudy_alter_student_chosen_program'),
    ]

    operations = [
        migrations.RenameField(
            model_name='studentuniversityassignment',
            old_name='assignment_id',
            new_name='student_university_assignment_id',
        ),
        migrations.RemoveField(
            model_name='studentuniversityassignment',
            name='program_id',
        ),
        migrations.AddField(
            model_name='studentuniversityassignment',
            name='program',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='testapp.programofstudy'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='programofstudy',
            name='program_name',
            field=models.CharField(choices=[('Computer Science', 'Computer Science'), ('Engineering', 'Engineering'), ('Business Administration', 'Business Administration'), ('Computer Science', 'Computer Science'), ('Engineering', 'Engineering'), ('Business Administration', 'Business Administration'), ('Biology', 'Biology'), ('Psychology', 'Psychology'), ('History', 'History'), ('Mathematics', 'Mathematics'), ('English Literature', 'English Literature'), ('Physics', 'Physics'), ('Chemistry', 'Chemistry'), ('Economics', 'Economics'), ('Political Science', 'Political Science'), ('Sociology', 'Sociology'), ('Environmental Science', 'Environmental Science'), ('Art and Design', 'Art and Design'), ('Music', 'Music'), ('Medicine', 'Medicine'), ('Nursing', 'Nursing')], max_length=255),
        ),
        migrations.AlterField(
            model_name='university',
            name='slots_filled',
            field=models.PositiveIntegerField(),
        ),
        migrations.AlterField(
            model_name='university',
            name='total_slots',
            field=models.PositiveIntegerField(),
        ),
        migrations.AlterField(
            model_name='university',
            name='university_grade',
            field=models.CharField(choices=[('A', 'A'), ('B', 'B'), ('C', 'C')], max_length=1),
        ),
    ]
