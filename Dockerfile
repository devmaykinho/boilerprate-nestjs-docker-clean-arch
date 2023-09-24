ARG IMAGE_NAME='node:18.17.1-slim '
FROM $IMAGE_NAME as fargate
USER node
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn run build
EXPOSE 8080
CMD [ "node", "dist/src/main.js" ]
