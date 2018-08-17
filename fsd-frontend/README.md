# FsdFrontend
  Angular 6.1.3.

## Development server
 npm start

#Added By Prajit
Creating New Application ng new <application-name> --minimal
ng generate component <component-name>
ng generate module <module-name>
ng generate module modules/movie
ng generate component modules/movie/components/thumbnail --module modules/movie/movie.module.ts --prefix movie
ng generate service modules/movie/service/tmdb-movie --module modules/movie/movie.module.ts --flat
ng generate component modules/movie/components/popular-movies --module modules/movie/movie.module.ts --prefix movie
ng generate module modules/material
ng generate module modules/movie-router
npm install --save @angular/material @angular/cdk @angular/animations hammerjs--save-exact
npm install json-server --save-exact --global & json-server .\json-server\mock-watchlist.json
ng generate component modules/movie/components/watchlist --module modules/movie/movie.module.ts --prefix movie
ng generate component modules/movie/components/tmdb-container-watchlist --module modules/movie/movie.module.ts --prefix movie
ng generate component modules/movie/components/search-movie --module modules/movie/movie.module.ts --prefix movie

#Docker Installation:
sudo apt-get update -y
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common -y
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add - 
sudo apt-key fingerprint 0EBFCD88
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" -y
sudo apt-get update -y
sudo apt-get install docker-ce -y

docker images 
docker images -q --no-trunc
docker pull mysql
docker history mysql ->Layers

docker run --detach --name=db-movie-cruiser --env="MYSQL_ROOT_PASSWORD=root" --publish 6033:3306 --link otherService:service mysql:5.6 
docker ps -a
docker rm db-movie-cruiser-->Remove Container By Name
docker logs db-movie-cruiser
docker inspect db-movie-cruiser
ip a | grep docker | grep inet
docker inspect db-movie-cruiser | grep IPAddress
sudo apt-get install mysql-client
mysql -uroot -proot -h 172.17.0.2 -P 3306

docker kill $(docker ps -q)
docker volume ls -qf dangling=true

docker rm $(docker ps -a -q)
docker rm $(docker ps -q -f status=exited)

docker rmi $(docker images -q)
docker rmi $(docker images -q -f dangling=true)docker kill $(docker ps -q)

docker rm $(docker ps -a -q)
docker rm $(docker ps -q -f status=exited)

docker rmi $(docker images -q)
docker rmi $(docker images -q -f dangling=true)
=====================================================
sudo docker pull mysql:latest
Need Link To Install Docker In Linux:
sudo docker images

sudo docker run --detach --name=movie-cruiser-mysql --env="MYSQL_ROOT_PASSWORD=root" --publish 6033:3306 -v /home/ubuntu/Documents/prajitws/mysql-data:/var/lib/mysql mysql:latest
sudo docker ps --all
sudo docker logs <ContainerId>

sudo docker ps -a
sudo docker stop <ContainerId>
sudo docker rm <ContainerId>

sudo docker exec -it <ContainerId> bash
mysql -uroot -proot,show databases

sudo docker run --detach --name=movie-cruiser-mysql --network=host --env MYSQL_ROOT_PASSWORD=root --env MYSQL_DATABASE=MovieCruiser --env MYSQL_USER=app --env MYSQL_PASSWORD=root123  --publish 3306:3306 mysql:latest