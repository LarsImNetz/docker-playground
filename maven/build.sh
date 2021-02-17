#!/bin/sh

if [ "$OS" == "Windows_NT" ]; then
  mvn -q clean
  mvn verify
else


    if [[ ! -d application ]]; then
        echo "can't find directory application. Are you in a wrong directory?"
        exit 1
    fi

    
    # DOCKER_CONTAINER=maven:3.6.3-jdk-14-slim
    DOCKER_CONTAINER=maven:3.6.3-adoptopenjdk-14

    docker run --rm \
        --name my-maven-project-$$ \
        -v "$(pwd)":/usr/src/mymaven \
        -v "$(pwd)/.maven-repo":/root/.m2 \
        -w /usr/src/mymaven \
        ${DOCKER_CONTAINER} mvn $@
fi
