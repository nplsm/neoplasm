FROM node:lts-alpine as pnpm
RUN apk --no-cache add curl
RUN curl -L https://unpkg.com/@pnpm/self-installer | node

FROM pnpm as dev-install
WORKDIR /usr/src/app
COPY ["package.json", "pnpm-lock.yaml", "./"]
RUN pnpm i

FROM dev-install as dev
COPY . .

FROM dev as build
RUN pnpm build

FROM pnpm as prod-install
WORKDIR /usr/src/app
COPY ["package.json", "pnpm-lock.yaml", "./"]
RUN pnpm i -P

FROM prod-install as prod
COPY --from=build ./usr/src/app/__build__ ./__build__