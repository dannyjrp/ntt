#!/bin/bash

echo "borrando contenedor anterior"

anterior=`docker ps -a |grep 3000 |awk -F " " '{print $1}'`
docker rm -fv $anterior

anterior1=`docker ps -a |grep 4000 |awk -F " " '{print $1}'`
docker rm -fv $anterior1

echo "Desplegando en produccion"

cd /home/danny/Documents/proyectos/ntt
docker build -t "ntt:3" .
docker run -dti -p3000:3000 --name rest$1 ntt:3
docker run -dti -p4000:3000 --name rest$2 ntt:3
