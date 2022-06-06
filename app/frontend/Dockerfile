FROM node:16-alpine

WORKDIR /app

COPY package*.json /

COPY . .

RUN npm install -f

EXPOSE 3000

CMD [ "npm", "start" ]
