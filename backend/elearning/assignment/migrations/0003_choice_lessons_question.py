# Generated by Django 2.2.3 on 2019-11-19 03:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('assignment', '0002_auto_20191115_1037'),
    ]

    operations = [
        migrations.CreateModel(
            name='Choice',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Lessons',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=100)),
                ('assignment', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='assignment.Assignment')),
            ],
        ),
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.CharField(max_length=100)),
                ('order', models.SmallIntegerField()),
                ('answer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='answer', to='assignment.Choice')),
                ('choices', models.ManyToManyField(to='assignment.Choice')),
                ('lessons', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='assignment.Lessons')),
            ],
        ),
    ]
