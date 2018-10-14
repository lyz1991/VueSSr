FROM node:8.11.2
MAINTAINER lyz
WORKDIR /VueSSr
ADD . /VueSSr
ARG stage
RUN npm i pm2 -g
RUN yarn install && npm run $stage
EXPOSE 8080
CMD ["pm2-runtime", "pm2.yml"]
