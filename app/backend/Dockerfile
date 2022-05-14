FROM node:16-alpine

WORKDIR /app

COPY package*.json /

COPY . .

RUN npm install

EXPOSE 3001

ENTRYPOINT [ "npm", "start" ]
