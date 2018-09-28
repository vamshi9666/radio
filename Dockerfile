FROM node:6.14.4-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 

COPY . . 

EXPOSE 3000

CMD ["npm" "start"]
