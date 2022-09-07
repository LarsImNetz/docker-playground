# This is a demonstration of fail!

The program must fail, so we exit with System.exit(1);

build by `make build` which creates the java application and than create a Docker Container with the given Dockerfile

To start the application in foreground, use `docker compose up`
The application starts, fail and starts again, the shell is blocked and shows the errors

On an other shell with `docker ps` you will find the application with status 'Restarting...'
here we can stop the failed container by `docker compose stop`

Or press Ctrl-C on the shell where we start the container.

