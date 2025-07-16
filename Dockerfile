# Build stage
FROM node:22.2.0-slim AS build

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
COPY package*.json ./

# Install all dependencies (including dev dependencies for build)
RUN npm install

# Copy local code to the container image.
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM node:22.2.0-slim AS production

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy built application from build stage
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/build ./build

# Run the web service on container startup.
CMD [ "npm", "start" ]
