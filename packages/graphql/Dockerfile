FROM node:lts-alpine as pnpm
RUN apk --no-cache add curl
RUN curl -L https://unpkg.com/@pnpm/self-installer | node
FROM pnpm as install
WORKDIR /usr/src/app
COPY ["package.json", "pnpm-lock.yaml", "./"]
RUN pnpm i --prefer-frozen-lockfile
FROM install as dev
COPY . .
RUN ls