FROM node:10 as build

RUN apt update
RUN apt install imagemagick
WORKDIR /usr/src
COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build && yarn --production

FROM keymetrics/pm2:10-alpine

WORKDIR /usr/src
ENV NODE_ENV="production"
ENV PATH="./node_modules/.bin:$PATH"

COPY --from=build /usr/src .

ENV PM2_PUBLIC_KEY nuy4opgo3zkve58
ENV PM2_SECRET_KEY 3mhqt6mznnvzr6a

CMD ["pm2-runtime", "start", "ecosystem.config.js" ]
