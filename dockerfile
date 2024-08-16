FROM node:22.6.0-alpine
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "app.js"]
