---
title: Getting Started
---

## Primer

Please first take a look at the base GitHub repository https://github.com/julianpoy/recipesage. The [README](https://github.com/julianpoy/RecipeSage/blob/master/README.md) file there describes the basic approach and setup of the project.

## Development Tools

At a minimum, you'll want to install:

* Node
* Docker

## Setting Up Your Development Environment

1. Install [Docker](https://docs.docker.com/get-docker/) and [Node](https://nodejs.org/en/)
2. Clone this repo
3. Create a `.env` file in the root of the repository using `example.env` as a template. These can be left as placeholders, but the dependent functionality will not work without a real key in place.
4. Install dependencies by running `npm install` at the root of the repo.
5. Start the Docker containers by running `docker compose up -d` in the cloned repo
6. Run database migrations `docker compose exec backend npx prisma migrate dev`
7. RecipeSage should be running on `localhost` on port `80``

## Building 

### New code changes

All of the dev containers auto-reload. There is no need to down/up containers unless dependencies in `package.json` have been changed. It is recommended only to pass `--build` whenever you change these dependencies.

For example:
```
docker compose up --build -d
```

### Running Tests

Validate schema
```
docker compose exec backend npx prisma validate
```

Backend tests
```
docker compose exec backend env NODE_ENV=test POSTGRES_LOGGING=false npx nx test backend
```

