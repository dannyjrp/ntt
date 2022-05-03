#!/bin/bash

jwt=`curl -X POST -H "Content-Type: application/json" http://localhost:6000/DevOps/login`
jwt1=$(echo $jwt | cut -d':' -f2)
jwt2=$(echo $jwt1 | sed -e "s/}//g")
jwt3=$(echo $jwt2 | sed -e "s/\"//g")
sleep 2
test=`curl --location --request POST 'http://localhost:6000/DevOps' --header 'Authorization: Bearer '$jwt3  --header 'id: 2f5ae96c-b558-4c7b-a590-a501ae1c3f6c' --header 'Content-Type: application/json' --data-raw '{"message": "This is a test","to": "Juan Perez","from": "Rita Asturia","timeToLifeSec": 45}'`
echo $test
sub="Hello Juan"


echo "$test" | awk '!/Hello/{exit 1}' && echo Found

