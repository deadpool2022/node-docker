FROM node:15
WORKDIR /app
COPY package.json .
# the below ARG and RUN if statements are because we don't want to install dev dependencies in production
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
        then npm install; \
        else npm install --only=production; \
        fi
COPY . ./
EXPOSE 3000
CMD ["node", "index.js"]