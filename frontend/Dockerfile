# Frontend(Next JS)
# Use the official Node.js image from the Docker Hub
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Clear npm cache to avoid using stale dependencies
RUN npm cache clean --force

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build
# RUN npm run dev


# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
# CMD ["npm", "run", "dev"]
