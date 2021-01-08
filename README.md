# PlayersCRM

## Customer Relationship Management Platform

CRM, built on the basis of data from a video game server, which will help the owner in maintaining the server. <br>
Built using Django on the Backend and React on the Frontend.
Setup with Docker Compose.

## Main goals (business logic)

The main goal is to create an application that will be able to:

1. Periodically take the data from the game server
2. Generate statistics based on that data
3. Show data visualization
4. Enable basic communication between the company and the client.

## Main goals (as a developer)

Create a really modern, clean, good looking application.
Fully dockerized, using devops technologies with automated CI/CD.
One whose code I will use again.

## Extra goals

There are also few extra targets, that could be implemented if my Bechelor Thesis will be going well:

-   data forecasts (yes, data science everywhere)
-   more advanced communication (e.g. a message system)
-   all these other features I don't remember now

## Getting started

Quick note

```powershell
work-in --progress
```

Build compose images

```powershell
docker-compose build
```

Create compose containers

```powershell
docker-compose up
```

If migrations needed

```powershell
docker-compose exec backend python manage.py migrate
```

## Environment Variables

Example file `dev.env` is in the root of the repo.

| Variable name     | Value |
| ----------------- | ----- |
| POSTGRES_NAME     |       |
| POSTGRES_USER     |       |
| POSTGRES_PASSWORD |       |
| POSTGRES_HOST     |       |
| POSTGRES_PORT     |       |
| SECRET_KEY        |       |
| DEBUG             |       |
