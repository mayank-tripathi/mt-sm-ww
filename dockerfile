FROM node:8.9.3-alpine
WORKDIR /usr/src/app
COPY package.json .
RUN npm install --loglevel=warn
COPY . .
RUN npm run build:release