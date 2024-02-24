FROM node:20

WORKDIR /Users/abhishekghosh/SkyCapture/Skycapture_frontend/frontend

COPY package.json ./

RUN npm install

COPY . . 

EXPOSE 3000 

CMD ["npm", "start"]