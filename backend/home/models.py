from django.conf import settings
from django.db import models


class Testmodel(models.Model):
    "Generated Model"
    fieldtest = models.BigIntegerField()
