const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) return console.log('Could not connect to mongodb', err)
    console.log('Connected to mongodb')

    const db = client.db('TodoApp')

    db.collection('Todos').insertOne({
        text: "A todo item number 5",
        completed: true
    }, (err, result) => {
        if (err) return console.log('Failed to insert record into collection', err)
        console.log('The result is', JSON.stringify(result.ops, undefined, 4))
    })

    client.close()
})