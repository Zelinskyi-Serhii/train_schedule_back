# Train Schedule backend

## start 
#### git clone https://github.com/Zelinskyi-Serhii/train_schedule_back.git
#### npm install
#### npm start

## Description
### Used MySQL and sequelize.
### The database is deployed on Railway.com.
### The server part works on Render.com
#### If you open the site for the first time, you need to wait a few minutes for the database to load because I am using the free version of the service.


### On the backend part, I created several endpoints by which you can get all heroes, get only one hero, delete a hero, create a hero and update a hero.
#### base url = https://train-schedule-6o0l.onrender.com
#### get all endpoint = /trains - method GET
#### get one hero = /trains/:trainId - method GET
#### delete hero = /trains/:trainId - method DELETE
#### create hero = /trains = method POST
#### update hero = /trains/:trainId = method PATCH