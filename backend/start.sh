#!/bin/sh
set -e
python manage.py collectstatic --noinput
python manage.py migrate --noinput

gunicorn --bind=0.0.0.0:8080 config.wsgi --reload