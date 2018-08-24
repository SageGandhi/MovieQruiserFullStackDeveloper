Spring Boot Movie Cruiser Server Application Codebase
Add Spring Data Jpa+MySql/Local Testing Use Dev  Tools Dependency+H2 Database Application.yml

source env-variable.sh  && java -jar ./fsd-moviecruiser-service/target/fsd-moviecruiser-service-1.0.jar

sudo docker run --detach --name=MovieCruiserMysql --network=host --env MYSQL_ROOT_PASSWORD=root --env MYSQL_DATABASE=MovieCruiser --env MYSQL_USER=app_root --env MYSQL_PASSWORD=root123  --publish 3306:3306 mysql:5.5

sudo docker build -t prajit-gandhi-moviecruiser-springboot .
sudo docker run --detach --name=MovieCruiserBackEnd --network=host --publish 8080:8080 prajit-gandhi-moviecruiser-springboot


sudo docker build -t prajit-gandhi-moviecruiser-angular .
sudo docker run --detach --name=MovieCruiserFrontEnd --network=host --publish 4200:4200 prajit-gandhi-moviecruiser-angular

sudo docker login --username=prajitgandhi --password=
sudo docker tag <ImageId> prajitgandhi/movie-cruiser-01:<InamgeName/Tag>

sudo docker tag dfac1047adc4 prajitgandhi/movie-cruiser-01:moviecruiser-angular

sudo docker push prajitgandhi/movie-cruiser-01

sudo docker tag dfac1047adc4 prajitgandhi/movie-cruiser-01:moviecruiser-angular
sudo docker tag 51f74ec2b6ff prajitgandhi/movie-cruiser-01:moviecruiser-springboot

sudo docker images --digests
sudo docker rmi prajitgandhi/movie-cruiser-01@sha256:0a6d5395fdce4854beab23d8a9c72ff65e29eef4af6e0dd5dd41b552bef4462d
sudo docker rmi prajitgandhi/movie-cruiser-01:moviecruiser-angular

sudo curl -L https://github.com/docker/compose/releases/download/1.18.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version
sudo docker-compose up-->In Root Where Compose File Lives

Start From Clean Slate
sudo docker system prune -a
Only Selected Container Started By Docker Compose
sudo docker-compose down
=====================================================Steps Revisited===============================================
npm install->ng build --prod->mvn clean install->sudo docker ps --all
sudo docker login --username=prajitgandhi --password=***********

sudo docker build -t moviecruiser-fsd-frontend .
sudo docker images
sudo docker tag 729ed464a975 prajitgandhi/movie-cruiser-01:moviecruiser-fsd-frontend
sudo docker push prajitgandhi/movie-cruiser-01

sudo docker build -t moviecruiser-fsd-backend .
sudo docker images
sudo docker tag 8c36367c3874 prajitgandhi/movie-cruiser-01:moviecruiser-fsd-backend
sudo docker push prajitgandhi/movie-cruiser-01

sudo docker build -t fsd-moviecruiser-authenticator-service .
sudo docker images
sudo docker tag 63cb34af882a prajitgandhi/movie-cruiser-01:fsd-moviecruiser-authenticator-service
sudo docker push prajitgandhi/movie-cruiser-01

sudo service mysql stop
sudo service mysql status
netstat -ano|grep 8080 
netstat -ano|grep 9080 
netstat -ano|grep 3306 
netstat -ano|grep 4200

sudo docker-compose up --build
sudo docker-compose down
sudo docker system prune -a
