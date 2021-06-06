# Stage 1 - Build the React app
FROM node:14.15.4-alpine3.10 as dotdev-build

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 

# Bundle app source
COPY . .

RUN npm run build

# production environment
FROM nginx:stable-alpine

COPY --from=dotdev-build /usr/src/app/build /usr/share/nginx/html

COPY --from=dotdev-build /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3118

CMD ["nginx", "-g", "daemon off;"]