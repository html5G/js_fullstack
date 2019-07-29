
FROM daocloud.io/library/node:8.16.0-alpine
WORKDIR /app
COPY package.json /app
RUN cnpm i
COPY . /app
EXPOSE 8080
CMD node index.js
