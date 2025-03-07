const express = require('express')
const app = express()
const cors = require('cors')
const hrInterview = require('./middleware/authenticate')
const mongoose = require('mongoose')

//cors
app.use(cors())
// Middleware
app.use(hrInterview)
app.use(express.json());


app.get('/', (req, res) => {
    res.json({
        user: {
            name: 'John Doe',
            age: 30,

        }
    })
})

app.post("/registration", (req, res) => {
    const { username, password } = req.body
    res.json({
        message: "Registration Successful"
    })
    console.log(username, password)
})

app.listen(3000, () => {
    mongoose.connect("mongodb+srv://aselascience:k9RGheHfxwycrIC4@cluster0.0kjgl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
})


