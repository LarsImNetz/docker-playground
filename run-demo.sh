#!/bin/bash

if [[ ! -e SingleFileJavaApplication.class ]]; then
    echo "ERROR: SingleFileJavaApplication.class doesn't exists."
    echo "ERROR: You should build the file"
    exit 1
fi




# NAME=openjdk-8-$$
# CONTAINER=openjdk:8u222-jdk-slim


# NAME=openjdk-11-$$
# CONTAINER=openjdk:11.0.3-jdk-slim-stretch

NAME=openjdk-14
CONTAINER=openjdk:14.0-jdk

# we use docker to run our java program
docker run \
       --name=${NAME} \
       --rm \
       -it \
       --volume=$(pwd):/localhome \
       --workdir="/localhome" \
       ${CONTAINER} \
       java -Dtarget=demo SingleFileJavaApplication $@

