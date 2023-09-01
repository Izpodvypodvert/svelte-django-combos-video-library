# build env
FROM node:18.16.0-buster-slim as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build
# CMD cp -r build result_build
# COPY build result_build/
# EXPOSE 5173
ENV NODE_ENV=production
ENTRYPOINT ["sh", "entrypoint.sh"]
# CMD [ "node", "build" ]


# FROM node:18-alpine AS builder
# WORKDIR /app
# COPY package*.json .
# RUN npm ci
# COPY . .
# RUN npm run build
# RUN npm prune --production

# FROM node:18-alpine
# WORKDIR /app
# COPY --from=builder /app/build /app/result_build
# COPY --from=builder /app/node_modules /app/node_modules
# COPY package.json .
# EXPOSE 3000
# ENV NODE_ENV=production
# CMD [ "node", "build" ]