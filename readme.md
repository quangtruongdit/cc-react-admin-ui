
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

# Deploy to Github
- Set up vite.config.ts
base: "/[REPO_NAME]/"

```bash
base: "/cc-react-admin-ui/"
```

- Create deploy.yml
[.github/workflows/deploy.yml](https://github.com/quangtruongdit/cc-react-admin-ui/blob/main/.github/workflows/deploy.yml)

- Enable workflows permission
<img width="1120" alt="image" src="https://github.com/quangtruongdit/cc-react-admin-ui/assets/113823159/061316b5-421b-4052-85ba-c2552d382221">

- Visit Actions to view deploy status
<img width="959" alt="image" src="https://github.com/quangtruongdit/cc-react-admin-ui/assets/113823159/94361e4c-8035-4dc6-b3f8-e6b56f8ff2fd">

- Visit Pages to publish the app
<img width="718" alt="image" src="https://github.com/quangtruongdit/cc-react-admin-ui/assets/113823159/6d44d72b-5f67-4c2c-989b-0017c69435be">

- The app will be accessible from
"https://{your github account}.github.io/cc-react-admin-ui/"

# References:
https://dev.to/ysmnikhil/how-to-build-with-react-or-vue-with-vite-and-docker-1a3l
https://github.com/ErickKS/vite-deploy#04-create-githubworkflowsdeployyml-and-add-the-code-bellow
