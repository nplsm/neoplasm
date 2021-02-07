# Neoplasm web services monorepo

## Dev

Development enviroment is build on docker.

To install Docker on MacOS with brew run:

```
brew install docker --cask
```

Development enviroment runs every service with hot reloading,
so every change to the code will triger restart of the server with your changes.

Before running docker-compose .env file should be created.
Copy example.env file and modify it.

To run development docker enviroment run at root:

```
docker-compose up --build -d
```
