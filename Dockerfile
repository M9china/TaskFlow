# Stage 1: Build the app
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy the package.json and pnpm-lock.yaml files to the working directory
COPY package.json ./

# Install the dependencies using pnpm
RUN pnpm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN pnpm build

# Stage 2: Run the app using a distroless base image
FROM nginx:alpine

# Remove the default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy the custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/
COPY sitemap.xml /usr/share/nginx/html
COPY robots.txt /usr/share/nginx/html

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy the built app from the previous stage
COPY --from=build /app/dist .

# Expose the port on which the app will be running
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]