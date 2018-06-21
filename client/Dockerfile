# base image
FROM node:9.6.1-alpine

# Override the base log level (info).
ENV NPM_CONFIG_LOGLEVEL warn
WORKDIR /usr/src/app

# Install and configure `serve`.
RUN npm install -g serve
CMD serve -s build -p 3000
EXPOSE 3000

# Install all dependencies of the current project.
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install

# Copy all local files into the image.
COPY . .

# Build for production.
RUN npm run build --production
