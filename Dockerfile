
FROM node:22-alpine

#dockerHeader()

WORKDIR /app

COPY . .

EXPOSE 4000

CMD ["node", "dist/server.js"]