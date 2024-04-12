FROM node:18-slim as core

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock
COPY ./.yarn /app/.yarn
COPY ./.yarnrc.yml /app/.yarnrc.yml
RUN yarn --immutable

COPY ./public /app/public
COPY ./src /app/src
COPY ./index.html /app/index.html
COPY ./vite.config.ts /app/vite.config.ts

FROM core as build

ARG API_BASE_URL
ENV VITE_API_BASE_URL=${API_BASE_URL}

RUN yarn build

FROM core as full

COPY ./tests /app/tests
COPY ./.eslintignore /app/.eslintignore
COPY ./.eslintrc.js /app/.eslintrc.js
COPY ./.prettierrc.js /app/.prettierrc.js
COPY ./commitlint.config.js /app/commitlint.config.js
COPY ./tsconfig.json /app/tsconfig.json
COPY ./tsconfig.node.json /app/tsconfig.node.json
COPY ./types /app/types
ENTRYPOINT ["yarn"]

FROM nginx:alpine-slim as slim

COPY --from=build /app/dist /usr/share/nginx/html
