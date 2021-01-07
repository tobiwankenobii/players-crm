FROM python:3.8.2-alpine

WORKDIR /backend

RUN apk update && apk add postgresql-dev gcc python3-dev musl-dev

RUN pip install --upgrade pip

COPY ./requirements /requirements

RUN pip install -r /requirements/base.txt

COPY . /backend/

CMD gunicorn --bind=0.0.0.0:8080 config.wsgi