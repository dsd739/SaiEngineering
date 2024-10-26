FROM node:latest AS app
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=app /app/dist  /usr/share/nginx/html
EXPOSE 80