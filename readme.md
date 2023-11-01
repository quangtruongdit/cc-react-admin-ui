
# Using docker compose to run the app locally

- Make sure you already have Node, Docker, Docker Compose installed in your machine
  - https://docs.docker.com/engine/install/
  - https://nodejs.org/en/download
  - https://github.com/docker/compose
  
- Run the following command:

This command is required to run at the first time or whenever we change docker-compose.yaml  
```bash
docker-compose up --build --no-recreate -d
```

The next time, we will only run:

```bash
docker-compose up -d
```

List containers:

```bash
docker-compose ps
```

Log into the container and run the following command:

```bash
docker exec -it vite_docker sh
```

After that run:
```bash
npm i && npm run dev
```

Finnaly, open browser and run:

```bash
http://localhost:8080
```

## How to Dockerize images:

1. Create Dockerfile as in repository.
2. Dockerize iamge
```bash
docker build -t cc-react-admin-ui:latest .
```
3. Run docker image
```bash
docker run -d -p 5173:5173 cc-react-admin-ui:latest
```

# Deploy to production

Tobe defined:

# References:
https://dev.to/ysmnikhil/how-to-build-with-react-or-vue-with-vite-and-docker-1a3l

