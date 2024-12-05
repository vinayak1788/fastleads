# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package.json package-lock.json ./

# Install the Node.js dependencies
RUN npm install

# Copy the entire frontend directory to the container
COPY . .

# Build the application for production
RUN npm run build

# Expose the port that the frontend app will run on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
