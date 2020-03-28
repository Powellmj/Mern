FROM node:12.14-alpine as build
WORKDIR /usr/src/node_app
ARG NODE_ENV=production
ENV PATH /usr/src/node_app/node_modules/.bin:$PATH
COPY package.json /usr/src/node_app/package.json
RUN npm install --silent && mkdir /usr/src/node_app/frontend
COPY . /usr/src/node_app
RUN npm run heroku-postbuild
EXPOSE 5000
CMD ["npm", "run", "start"]

# doesnt try to run the dev server only the build
# install frontend first

# WORKDIR /usr/src/node_app/frontend

# CMD ["rails", "server", "-b", "0.0.0.0"]