FROM node:18

# set working directory
WORKDIR /usr/src/app

# copy package.json and yarn.lock
COPY package.json yarn.lock ./

# install dependencies
RUN yarn install --frozen-lockfile

# copy the rest of the source code
COPY . .

# build the application
RUN yarn build

# expose port 3000
EXPOSE 3000

# start the application
CMD ["yarn", "start"]
