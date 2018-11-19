FROM node:8
MAINTAINER Zach Justice <zach.justice@slalom.com>

RUN apt-get update && \
    apt-get install -y open-cobol

WORKDIR /usr/src/app

COPY yarn.lock ./
COPY package.json ./

RUN yarn install --production=true

COPY . .

EXPOSE 3000
CMD ["npm", "start"]
