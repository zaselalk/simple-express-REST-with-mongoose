const express = require('express')
const app = express()
const cors = require('cors')
const hrInterview = require('./middleware/authenticate')
const mongoose = require('mongoose')
const userModel = require('./models/User')


//cors
app.use(cors())
// Middleware
// app.use(hrInterview)
app.use(express.json());


app.get('/', (req, res) => {
    res.json({
        user: {
            name: 'John Doe',
            age: 30,

        }
    })
})

app.post("/registration", async (req, res) => {
    const { username, password } = req.body

    //save to the database
    const createdUser = await userModel.create({
        username,
        password
    })

    res.json(createdUser)

})

app.listen(3000, async () => {
    try {
        await mongoose.connect("mongodb+srv://aselascience:k9RGheHfxwycrIC4@cluster0.0kjgl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Database connected")
    } catch (error) {
        console.log(error)
    }
})


