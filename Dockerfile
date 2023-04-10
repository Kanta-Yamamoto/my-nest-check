FROM node:16.13.1-alpine
RUN npm i -g @nestjs/cli
WORKDIR /api
RUN apk add --no-cache git
RUN apk add --no-cache curl
CMD ["npm", "run", "start:dev"]
USER node
