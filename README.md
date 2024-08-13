# Ticket Maintenance Application

This project make part of my [Next.js](https://nextjs.org/) studies and was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Dockerized environment

To run docker environment you can simply use:

```bash
docker-compose up
```

add `-d` to detach docker, if you prefer, I like to see logs :wink:.

To access the environment you can use:

```bash
docker exec -it <container_name> /bin/sh
```

## Getting Started

I'm using npm to run this project, but you don't need to run it for yourself, docker do this for you.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Database setup

To apply prisma migrations in development environment:

```bash
npx prisma migrate dev
```

To create new migrations type:

```bash
prisma migrate dev --name <migration name>
```

There is a file on root called db-sample.sql. Here you have some sample data to fullfil the database.

**To deal with the database you need run through the docker.**

## Unit testing and coverage

... coming soon ...
