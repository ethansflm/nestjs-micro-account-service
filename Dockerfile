FROM node:18.15.0

WORKDIR /home/node/app

COPY package.json yarn.lock dist ./

RUN yarn --production

ENV PORT=9010

EXPOSE 9010

CMD ["node", "main.js"]
