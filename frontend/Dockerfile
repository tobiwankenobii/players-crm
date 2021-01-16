FROM node:14

ENV CHOKIDAR_USEPOLLING=true

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install

COPY . .

CMD yarn start