FROM node:12-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install xml2js

COPY . ./

CMD [ "node", "index.js"]