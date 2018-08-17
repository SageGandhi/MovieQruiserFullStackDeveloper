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

#Docker
ng build --prod
package-container.json->Using npm init In Different Dir & npm i express --save --save-exact
{
  "name": "server-express-package",
  "version": "1.0.0",
  "description": "Used For Serving Angular Code In Production For Fsd Movie Cruiser Application",
  "scripts": {
    "test": "echo \"Error: No Test Specified\" && exit 1",
    "start": "node server.js"
  },
  "author": "Prajit Gandhi",
  "license": "ISC",
  "dependencies": {
    "express": "4.16.3"
  }
}
sudo docker build -t prajit-gandhi-moviecruiser-angular .
