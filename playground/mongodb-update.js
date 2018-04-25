const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) return console.log('Could not connect to mongodb', err)

    const db = client.db('TodoApp')

    const Todos = db.collection('Todos')

    Todos.findOneAndUpdate({
        _id: new ObjectID("5ac1832f7fcffc5ab90167b5")
    }, {
        $set: {
            completed: true
        },
        $unset: {
            text: ''
        }
    }, {
        returnOriginal: false
    }).then( response => {
        console.log(response)
    })
    // client.close()
})