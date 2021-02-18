FROM node:lts-alpine as pnpm
RUN apk --no-cache add curl
RUN curl -L https://unpkg.com/@pnpm/self-installer | node

FROM pnpm as install
WORKDIR /usr/src/app
COPY ["package.json", "pnpm-lock.yaml", "./"]
RUN pnpm i

FROM install as dev
COPY . .

FROM dev as build
RUN pnpm build

FROM pnpm as prod
WORKDIR /usr/src/app
COPY ["package.json", "pnpm-lock.yaml", "./"]
RUN pnpm i -P
COPY --from=build ./usr/src/app/static ./static
COPY --from=build ./usr/src/app/__sapper__ ./__sapper__
