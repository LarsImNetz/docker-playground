
CC=javac

OBJS=SingleFileJavaApplication.class

SOURCES=SingleFileJavaApplication.java

all: $(OBJS)


SingleFileJavaApplication.class: $(SOURCES)
	$(CC) $<

clean::
	rm -f $(OBJS)

start: $(OBJS)
	./run-demo.sh Hello World
