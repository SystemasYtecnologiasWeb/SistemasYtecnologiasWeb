FROM node:boron

# Create app directory
RUN mkdir /app
WORKDIR /usr/src/app

#Install nodemon for developer server
RUN npm install nodemon --global

# Install app dependencies
COPY app/package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY app/ /usr/src/app

EXPOSE 80
CMD [ "npm", "start" ]
