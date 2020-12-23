FROM python:3.8.2-alpine

WORKDIR /backend

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apk update && apk add postgresql-dev gcc python3-dev musl-dev

RUN pip install --upgrade pip

COPY ./requirements /requirements

RUN pip install -r /requirements/base.txt

COPY ./entrypoint.sh .

COPY . /backend/

EXPOSE 8000

ENTRYPOINT ["/backend/entrypoint.sh"]