[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Collaborative Real Time Editor

A collaborative real-time editor that you can save your in progress texts in revisions made with Material UI, ReactJS, NodeJS, Websockets and MongoDB.

## Images

![Editor](./images/editor-screen.png?raw=true "Editor")

![Revisions](./images/revision-screen.png?raw=true "Revisions")

## To run the project using Docker Compose

Make sure that you have [docker](https://docs.docker.com/get-docker/) and [docker compose](https://docs.docker.com/compose/install/) installed and run the command like this:

```sh
docker-compose -f docker-compose.yml up --remove-orphans
```

## To run in standalone mode

Run `mongo:latest` image:

```sh
docker run -d -p 27017:27017 -p 28017:28017 -e AUTH=no mongo:latest
```

To run the client and server locally:

```sh
cd client && yarn && yarn start
cd server && yarn && yarn dev
```