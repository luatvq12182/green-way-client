docker container stop green-way-fe-client-ins
docker container rm green-way-fe-client-ins
docker image rm green-way-fe-clien
docker build -t green-way-fe-client .
docker run -d -p 6868:6868 --name green-way-fe-client-ins green-way-fe-client