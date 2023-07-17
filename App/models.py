from django.db import models

# Create your models here.
class InstaPosts(models.Model):
    link = models.TextField()

class ContactUs(models.Model):
    full_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)
    created_date = models.DateField(auto_now=True)