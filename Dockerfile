FROM node:12-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install body-parser express-xml-bodyparser

COPY . ./

CMD [ "node", "index.js"]