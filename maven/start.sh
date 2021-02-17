#!/bin/bash

echo "This will start application"

function start() {

    MONTH_NAME_SMALL=$(date +%b |  tr '[:upper:]' '[:lower:]')
    
    # local JAVA_NAME=openjdk-8-$$
    # local JAVA_CONTAINER=openjdk:8u222-jdk-slim

    # local JAVA_NAME=openjdk-11-$$
    # local JAVA_CONTAINER=openjdk:11.0.3-jdk-slim-stretch

    local JAVA_NAME=openjdk-14-$$
    local JAVA_CONTAINER=openjdk:14.0-jdk
    
    docker run \
           --name=${JAVA_NAME} \
           --rm \
           -it \
           -v $(pwd):/prg \
           ${JAVA_CONTAINER} \
           java -jar /prg/demo-application.jar play

    sleep 5
    cd -
    
}



cd application/target

if [[ ! -e "demo-application.jar" ]]; then
    echo "ERROR: Java Application not found."
    echo "ERROR: try ./build.sh"
    exit 1
fi

set -x
start
 