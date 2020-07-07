FROM node:12.18-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm isntall react-scripts -g
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3006
CMD npm start