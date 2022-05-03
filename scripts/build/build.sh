#!/bin/bash

echo "borrando contenedor anterior"

anterior=`docker ps -a |grep 6000 |awk -F " " '{print $1}'`
docker rm -fv $anterior

echo "Desplegando en test"

cd /home/danny/Documents/proyectos/ntt
docker build -t "ntt:2" .
docker run -dti -p6000:3000 --name rest$1 ntt:2
