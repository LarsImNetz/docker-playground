#!/bin/bash

CURRENT_DIR_ABS=$(pwd)

echo "npm install via docker"
NODENAME=node-10.23.2-$$
NODECONTAINER=node:10.23.3-alpine3.10

docker run \
       --rm \
       --name=${NODENAME} \
       --volume ${CURRENT_DIR_ABS}:/rootfs \
       --workdir /rootfs \
       ${NODECONTAINER} \
       sh -c 'npm install --loglevel verbose && npm run build'
