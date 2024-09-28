# Stage 1: Build the React app with Vite
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) into the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the React Vite app
RUN npm run build

# Stage 2: Serve the app using a lightweight web server (nginx)
FROM nginx:alpine

# Copy the built files from the previous stage to nginx's default directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
