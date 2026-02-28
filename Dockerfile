FROM node:18-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

# MegaCorp internal CA certs (placeholder)
# COPY certs/megacorp-root-ca.crt /usr/local/share/ca-certificates/
# RUN update-ca-certificates

EXPOSE 3000

USER node

CMD ["node", "index.js"]
