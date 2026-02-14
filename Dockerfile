# Development
# FROM node:24.4.1-alpine3.21 AS dev
FROM node:24.13.1-bookworm-slim AS dev
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "run", "dev"]
# CMD ["node", "./out/app.js"]
# CMD ["/usr/local/bin/node", "/app/out/app.js"]

# Build for production stage
FROM node:24.13.1-bookworm-slim AS build
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build
RUN npm prune --production

# Production
FROM node:24.13.1-bookworm-slim AS prod
WORKDIR /app
COPY --from=build app/node_modules/ node_modules/
COPY --from=build app/package*.json .
COPY --from=build app/out out/
COPY --from=build app/.env.production .
CMD ["npm", "run", "start"]