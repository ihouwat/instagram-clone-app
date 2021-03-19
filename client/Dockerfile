# Node image
FROM node:14.16.0-alpine3.10

COPY package.json /app/

RUN npm install -g @angular/cli

COPY . /app/

EXPOSE 4200