const express = require('express')
const bodyParser = require('body-parser')

const { mongoose } = require('./db/mongoose')
const { Todo } = require('./models/todo')
const { User } = require('./models/user')

const app = express()

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
    const todo = new Todo({
        text: 'This is a new todo item'
    })

    todo.save().then( doc => {
        res.status(200).send(doc)
    }, err => {
        res.status(400).send(err)
    })
})

app.listen(3000, () => {
    console.log('app running on port 3000')
})