# Node image
FROM node:14.16.0-alpine3.10

WORKDIR /app

COPY package.json .
COPY package-lock.json .

# install dependencies
RUN npm install

# Install Angular CLI
RUN npm install -g @angular/cli

# add app
COPY . .

EXPOSE 3000