FROM node:0.12.7

EXPOSE 3000

ADD package.json ./src/package.json
RUN cd ./src && npm install

ADD . ./src
WORKDIR ./src

CMD ["npm", "start"]
