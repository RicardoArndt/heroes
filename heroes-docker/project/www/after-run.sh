#!/bin/bash -e
# created by ricardoguilhermearndt@gmail.com


#exec command => docker exec -ti heroesdocker_node_1 bin/sh

npm install -g @angular/cli@1.4.10

ng set --global packageManager=npm

ng new heroes

cd heroes

ng serve --host 0.0.0.0

#set permissions => chown -R 777 .
