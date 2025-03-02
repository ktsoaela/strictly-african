# Frontend(Next JS)
# Use the official Node.js image from the Docker Hub
FROM node:22

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

# Optional: Change ownership of the app files
RUN chown -R node:node /usr/src/app

# Build the application
# RUN npm run build
# RUN npm run dev

# Clean .next directory, build, and run the app in development mode
RUN rm -rf .next && npm run build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
# CMD ["npm", "start"]
CMD ["npm", "run", "dev"]


