FROM node:16

WORKDIR /app

COPY package.json .
RUN npm i

RUN npm i serve -g

COPY . .

RUN npm run build

## EXPOSE [Port you mentioned in the vite.config file]

EXPOSE 6868

CMD ["npm", "run", "serve"]