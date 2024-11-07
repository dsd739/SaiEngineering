# Build Stage
FROM node:latest AS app
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# Nginx and Certbot Stage
FROM nginx:latest

# Copy build output to Nginx HTML directory
COPY --from=app /app/dist /usr/share/nginx/html

# Install Certbot and necessary dependencies
RUN apt-get update && \
    apt-get install -y software-properties-common && \
    apt-get update && \
    apt-get install -y certbot python3-certbot-nginx

# Copy custom Nginx configuration
#COPY nginx.conf /etc/nginx/nginx.conf

# Expose ports for HTTP and HTTPS
EXPOSE 80
EXPOSE 443

# Start Nginx and Certbot in the background
CMD ["sh", "-c", "nginx -g 'daemon off;' & certbot --nginx -d saiengineering.me -d www.saiengineering.me --non-interactive --agree-tos -m dsdangi739@gmail.com && certbot renew --dry-run"]
