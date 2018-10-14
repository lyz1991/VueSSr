FROM node:8.11.2
MAINTAINER lyz
WORKDIR /VueSSr
ADD . /VueSSr
ARG stage
RUN yarn install && npm run $stage
EXPOSE 8080
CMD ["node", "ssr_server.js"]
