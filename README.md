# PlayersCRM

## Customer Relationship Management Platform

Built using Django on the Backend and React on the Frontend.
<br>
Setup via docker-compose.

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

| Variable name     | Value |
| ----------------- | ----- |
| POSTGRES_NAME     |       |
| POSTGRES_USER     |       |
| POSTGRES_PASSWORD |       |
| POSTGRES_HOST     |       |
| POSTGRES_PORT     |       |
| SECRET_KEY        |       |
| DEBUG             |       |
