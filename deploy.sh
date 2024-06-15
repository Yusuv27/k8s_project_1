#!/bin/bash

image_name="fwapp"
tag="latest"
dockerhub_username="yusuv16"

docker build -t $image_name:$tag .

docker tag $image_name:$tag $dockerhub_username/$image_name:$tag

docker push $dockerhub_username/$image_name:$tag
