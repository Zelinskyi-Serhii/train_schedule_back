# Train Schedule backend

## start 
#### git clone https://github.com/Zelinskyi-Serhii/train_schedule_back.git
#### npm install
#### npm start

### Description
#### Used MySQL and sequelize.
#### The database is deployed on Railway.com.
#### The server part works on Render.com
#### If you open the site for the first time, you need to wait a few minutes for the database to load because I am using the free version of the service.


### On the backend part, I created several endpoints by which you can get all trains, delete a train, create a train and update a train.
#### base url = https://train-schedule-6o0l.onrender.com
#### get all trains = /trains - method GET
#### get one train = /trains/:trainId - method GET
#### delete train = /trains/:trainId - method DELETE
#### create train = /trains = method POST
#### update train = /trains/:trainId = method PATCH
