Starta databas db mongod
# C:\Program Files\MongoDB\Server\4.0\bin adress
#Data folder C:\data\db

mongo
show dbs	Print a list of all databases on the server.
use <db>	Switch current database to <db>. The mongo shell variable db is set to the current database.
show collections

db.collection.find() - db.rooms.find()
Hear are some use full delete operations for mongodb using mongo shell

To delete particular document in collections: db.mycollection.remove( {name:"stack"} )

To delete all documents in collections:  db.mycollection.remove()

To delete collection :  db.mycollection.drop()

to delete database : first go to that database by use mydb command and then

 db.orders.deleteMany( { "firstName" : "apa" } );
https://docs.mongodb.com/manual/reference/mongo-shell/