Spring Boot Movie Cruiser Server Application Codebase
Add Spring Data Jpa+MySql/Local Testing Use Dev  Tools Dependency+H2 Database Application.yml

source env-variable.sh  && java -jar ./fsd-moviecruiser-service/target/fsd-moviecruiser-service-1.0.jar

sudo docker run --detach --name=MovieCruiserMysql --network=host --env MYSQL_ROOT_PASSWORD=root --env MYSQL_DATABASE=MovieCruiser --env MYSQL_USER=app_root --env MYSQL_PASSWORD=root123  --publish 3306:3306 mysql:5.5

sudo docker build -t prajit-gandhi-moviecruiser-springboot .
sudo docker run --detach --name=MovieCruiserBackEnd --network=host --publish 8080:8080 prajit-gandhi-moviecruiser-springboot


sudo docker build -t prajit-gandhi-moviecruiser-angular .
sudo docker run --detach --name=MovieCruiserFrontEnd --network=host --publish 4200:4200 prajit-gandhi-moviecruiser-angular
