#!/bin/bash
docker build -t sytw/nodejs-server .
docker run -it --name sytw -p 80:80 -v $PWD/app:/usr/src/app -d sytw/nodejs-server 
