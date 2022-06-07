FROM node:17
WORKDIR /app
COPY app/package*.json ./
RUN npm install
COPY app/. .
CMD [ "node", "app.js" ]