# Docker Commands Used

| Description | Command |
| :---:        |    :----:   | 
| Command to build the image      | `docker build -t node-app-image .`       | 
| Command to run the container| `docker run -p 3000:3000 -d --name node-app-con node-app-image`| 
| Command to interact with Container | `docker exec -it node-app-con bash` |
| Command with volume option if the node_modules exists in local machine | `docker run -v $(pwd):/app -p 3000:3000 -d --name node-app-con node-app-image` |
| Command with volume option if the node_modules does not exists in local machine| `docker run -v $(pwd):/app -v /app/node_modules -p 3000:3000 -d --name node-app-con node-app-image`|
| Command to see container logs | `docker logs <container name (node-app-con)>` |
| Command with volume option having read only mode(we cannot create a file inside docker container, docker container can only read not alter any files)| `docker run -v $(pwd):/app:ro -v /app/node_modules -p 3000:3000 -d --name node-app-con node-app-image`|
| Command to override env variables via command line | `docker run -v $(pwd):/app:ro -v /app/node_modules --env PORT=4000 -p 3000:4000 -d --name node-app-con node-app-image` |
| Command to use .env file to specify environment variables | `docker run -v $(pwd):/app:ro -v /app/node_modules --env-file ./.env -p 3000:4000 -d --name node-app-con node-app-image` |
| Command to remove volumes | `docker volume prune` |
| Command to check volumes | `docker volume ls` |
| Command to remove volumes along with container | `docker rm node-app-con -fv` |
| Command to remove container | `docker rm node-app-con -f` |
| Command to run docker compose up | `docker-compose up` |
| Command to run docker compose up in detached mode | `docker-compose up -d` |
| Command to run docker compose up with recreation of image because when you change the dockerfile , docker compse will not automatically know there is a change | `docker-compose up --build -d` |
| Command to run docker compose down | `docker-compose down` |
| Command to run docker compose down along with removing volumes | `docker-compose down -v` |
| Command to run docker compose up with dev requirements | `docker-compose -f ./docker-compose.yml -f ./docker-compose.dev.yml up --build -d` |
| Command to run docker compose up with prod requirements | `docker-compose -f ./docker-compose.yml -f ./docker-compose.prod.yml up --build -d` |
| Command to run docker compose down with dev requirements | `docker-compose -f ./docker-compose.yml -f ./docker-compose.dev.yml down -v` |
| Command to run docker compose down with prod requirements | `docker-compose -f ./docker-compose.yml -f ./docker-compose.prod.yml down -v` |
