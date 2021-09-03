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