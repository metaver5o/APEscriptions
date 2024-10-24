# Dockerfile
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json if using any dependencies
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install ethers@5.4.5

# Copy the JavaScript script into the container
COPY . .

# Command to run the JavaScript file
CMD ["node", "mint.js"]