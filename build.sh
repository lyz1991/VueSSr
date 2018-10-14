#!/bin/bash
stage=$1
port=$2
docker rmi $(docker images -f "dangling=true" -q)
docker build --rm --build-arg stage=${stage:-'dev'} -t vuessr .
docker run --name="vue_ssr" -p ${port:-5010}:8080 vuessr