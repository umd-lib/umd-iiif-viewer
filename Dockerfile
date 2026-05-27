FROM node:24.15.0-slim AS build

WORKDIR /opt/umd-mirador
COPY . /opt/umd-mirador/

RUN npm install
RUN npm run build

FROM ghcr.io/static-web-server/static-web-server:2-alpine

COPY --from=build /opt/umd-mirador/dist /var/public/viewer/
