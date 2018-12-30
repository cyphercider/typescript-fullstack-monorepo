FROM node:lts-alpine 
WORKDIR /usr/src/app
COPY dist ./dist
COPY public ./public
COPY package.json .
RUN npm install --only=production

EXPOSE 3000

CMD [ "npm", "run", "startServer" ]