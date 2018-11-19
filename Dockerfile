FROM node:8
MAINTAINER Zach Justice <zach.justice@slalom.com>

EXPOSE 3000

RUN apt-get update && \
    apt-get install -y open-cobol

COPY * /workspace/

WORKDIR /workspace

