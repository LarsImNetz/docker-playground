# README

This should show, how to use docker container just for build things like a java program
without have java installed or node stuff without node/npm is installed.

Use a shell and just `make start` to build a java application and start it.

Find in directory `node/todo-app` a node application.
There just `./build.sh` then `start.sh` on a browser open `http://localhost:4200/`
voila, node application without node/npm is installed.

You would like to use emacs on a computer where emacs is not installed but docker.
Go to directory `emacs` and start `./emacs.sh` in this file you see, how to start emacs in a simple way.

In directory `maven` find a fat java application which is buildable by mvn.
Just `./build.sh package` to create this application. `./start.sh` to start it.

These are just demonstrations how to use docker to build programs where no environment is installed locally.
