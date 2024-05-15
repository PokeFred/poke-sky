# base setup of the container
FROM node:21-alpine
WORKDIR /app

# setup and build the app
COPY . .
RUN npm install
RUN npm run build

# run the app
EXPOSE 3000
CMD ["npm", "start"]
