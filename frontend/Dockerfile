FROM node:14

WORKDIR /frontend

COPY package.json yarn.lock /frontend/

RUN yarn install

COPY . /frontend

CMD yarn start