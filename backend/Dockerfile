FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install && npm audit fix

COPY . .

RUN chown -R node:node /app

USER node

EXPOSE 3001

CMD [ "npm", "run", "dev" ]
