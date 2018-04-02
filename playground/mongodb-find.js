const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) return console.log('Could not connect to mongodb', err)

    const db = client.db('TodoApp')

    db.collection('Todos').find().toArray().then( docs => {
        console.log('Todos', JSON.stringify(docs, undefined, 4))
    }, err => {
        if (err) return console.log('Unable to find Todos', err)
    })

    // client.close()
})