FROM node:12-alpine
COPY src src
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install
CMD [ "npm", "run", "start" ]