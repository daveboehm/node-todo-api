const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) return console.log('Could not connect to mongodb', err)

    const db = client.db('TodoApp')

    const Todos = db.collection('Todos')

    db.collection('Todos').deleteMany({text: "A todo item"}).then( response => {
        console.log(response)
    })
    // client.close()
})