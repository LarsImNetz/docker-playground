#!/bin/bash

CURRENT_DIR_ABS=$(pwd)

echo "npm install via docker"
NODENAME=node-10.23.2-$$
NODECONTAINER=node:10.23.3-alpine3.10


docker run \
       --rm \
       --publish 4200:4200 \
       --name=${NODENAME} \
       --volume ${CURRENT_DIR_ABS}:/rootfs \
       --workdir /rootfs \
       ${NODECONTAINER} \
       sh -c 'npm start -- --host 0.0.0.0'

#  sh -c 'npm start'
# LLA: das geht so nicht, siehe:
# https://stackoverflow.com/questions/46778868/ng-serve-not-working-in-docker-container
