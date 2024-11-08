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
# Append file1.txt to file2.txt
RUN cp --from=app /app/nginx.conf  /etc/nginx/nginx.conf

# Copy custom Nginx configuration
#COPY nginx.conf /etc/nginx/nginx.conf


