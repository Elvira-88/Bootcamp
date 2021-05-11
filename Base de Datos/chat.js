//new Date(2021, 4, 15, 20, 25, 05)

db.users.insertMany([
    {
        username: "Paco",
        email: "paquito@gmail.com",
        password: "789564",
        birthdate: new Date(1993, 7, 13),
        lastLogin:new Date(2021, 4, 15, 20, 25),
        status: {
            online: false,
            available: false
        },
        contacts: []
    },{
        username: "Pepe",
        email: "pepito@gmail.com",
        password: "485263",
        birthdate: new Date(1987, 2, 10),
        lastLogin:new Date(2021, 5, 11, 10, 25),
        status: {
            online: true,
            available: false
        },
        contacts: []
    },{
        username: "Juan",
        email: "juanito@gmail.com",
        password: "9654826",
        birthdate: new Date(1994, 2, 22),
        lastLogin:new Date(2021, 4, 21, 22, 25),
        status: {
            online: false,
            available: false
        },
        contacts: []
    },    {
        username: "Antonio",
        email: "antoñito@gmail.com",
        password: "365985",
        birthdate: new Date(1989, 1, 15),
        lastLogin:new Date(2021, 4, 15, 20, 25),
        status: {
            online: true,
            available: true
        },
        contacts: []
    }  

])

const users = db.users.find().toArray();

db.users.update({_id: users[0]._id}, {$set: {contacts: [users[1]._id, users[2]._id, users[3]._id]}})

db.users.update({_id: users[1]._id}, {$set: {contacts: [users[0]._id, users[2]._id]}})

db.users.update({_id: users[2]._id}, {$set: {contacts: [users[0]._id, users[1]._id]}})

db.users.update({_id: users[3]._id}, {$set: {contacts: [users[0]._id]}})

db.chats.insertMany([
    {
        members: [users[0]._id, users[1]._id, users[2]._id],
        messages: [
            {from: users[0]._id, body: "Hola, ¿vamos a la playa?", createAt: new Date(2021, 4, 8, 17, 30, 15)},             
            {from: users[1]._id, body: "Vale", createAt: new Date(2021, 4, 8, 17, 31, 15)},
            {from: users[0]._id, body: "Hola, ¿vamos a la playa?", createAt: new Date(2021, 4, 8, 17, 31, 40)},  
        ]
    },{
        members: [users[0]._id, users[3]._id],
        messages: [
            {from: users[3]._id, body: "¿Tienes el ejercicio 7 hecho?", createAt: new Date(2021, 5, 10, 20, 10)},
            {from: users[0]._id, body: "No, me fui a la playa", createAt: new Date(2021, 5, 10, 20, 20)},
        ]
    }
])

db.users.find({"status.online": true, "status.available": true}).pretty();

db.users.update(
    {},
    {$set: {"status.online": true, "lastLogin" : new Date()}},
    {multi: true}
);

db.chats.find({}, {"messages.body": true}).limit(1).pretty()

db.chats.find({members: {$size: 3}}, {"messages.body": true}).pretty()

