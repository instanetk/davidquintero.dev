# Stage 1 - Build the React app
FROM node:14.15.4-alpine3.10 as dotdev-build

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 

# Bundle app source
COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]