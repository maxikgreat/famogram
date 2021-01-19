FROM node:14

RUN mkdir -p /usr/src/hativi

WORKDIR /usr/src/hativi

COPY package*.json /usr/src/hativi

RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

COPY . /usr/src/hativi

CMD ["npm", "run", "dev"]
