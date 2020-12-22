FROM python:3.8.2

WORKDIR /backend

RUN pip install --upgrade pip

COPY ./requirements /requirements

RUN pip install -r /requirements/base.txt

COPY . /backend/