docker container stop green-way-client-ins
docker container rm green-way-client-ins
docker image rm green-way-client
docker build -t green-way-client .
docker run -dp 6868:6868 --name green-way-client-ins green-way-client