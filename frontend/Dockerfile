# Use the official Node.js 20 image as the base image
FROM node:20-slim

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --legacy-peer-deps --unsafe-perm=true

# Ensure executables in node_modules/.bin have correct permissions
RUN chmod -R 755 /app/node_modules/.bin

# Copy the rest of the application files (after installing dependencies)
COPY . .

# Verify necessary files exist (optional debugging step)
RUN ls -al /app/src/styles && ls -al /app/src/components

# Ensure permissions for all files
RUN chown -R node:node /app

# Switch to the 'node' user for further operations
USER node

# Ensure next.js is executable by the 'node' user
RUN chmod +x /app/node_modules/.bin/next

# Build the application
RUN npm run build

# Expose the port your application will run on
EXPOSE 3005

# Command to run the application in production mode
CMD ["npm", "run", "start"]

