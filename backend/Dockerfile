FROM python:3.8.2-alpine

WORKDIR /app

RUN apk update && apk add postgresql-dev gcc python3-dev musl-dev

RUN pip install --upgrade pip

COPY ./requirements /requirements

RUN pip install -r /requirements/base.txt

COPY . /app/

EXPOSE 8080