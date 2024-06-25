FROM node:alpine

WORKDIR /usr/app

# Copying project files
COPY ./ /usr/app/

# Installing packages
RUN yarn

EXPOSE 8000

# Yarn start command
CMD ["yarn", "start"]