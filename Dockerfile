FROM node:24-slim AS build

WORKDIR /opt/umd-mirador
COPY . /opt/umd-mirador/

RUN npm install
RUN npm run build

FROM ghcr.io/static-web-server/static-web-server:2-alpine

# Upgrade the CA bundle: the base image ships one that still trusts the
# compromised eMudhra intermediates (fixed in Alpine ca-certificates 20261020).
USER root
RUN apk upgrade --no-cache ca-certificates ca-certificates-bundle
USER sws:sws

COPY --from=build /opt/umd-mirador/dist /var/public/viewer/
