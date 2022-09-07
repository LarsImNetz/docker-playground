
docker run -it --rm -v /:/rootfs -e DISPLAY:$DISPLAY -v /tmp/.X11-unix:/tmp/.X11-unix silex/emacs
