FROM node:10.5.0-alpine

WORKDIR /src/

COPY package.json yarn.lock ./
COPY website/ ./website

CMD ["yarn", "build"]