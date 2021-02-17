# NAME=openjdk-11
# CONTAINER=openjdk:11.0.3-jdk-slim-stretch

NAME=openjdk-14
CONTAINER=openjdk:14.0-jdk

current_dir=$(shell pwd)

CC=docker run \
       --name=$(NAME) \
       --rm \
       -it \
       --volume=$(current_dir):/localhome \
       --workdir="/localhome" \
       $(CONTAINER) \
       javac

# CC=javac

OBJS=SingleFileJavaApplication.class

SOURCES=SingleFileJavaApplication.java

all: $(OBJS)


SingleFileJavaApplication.class: $(SOURCES)
	$(CC) $<

clean::
	rm -f $(OBJS)

start: $(OBJS)
	./run-demo.sh Hello World
