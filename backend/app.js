const express = require('express');
const app = express();


var whitelist = ['http://localhost:8000', 'http://localhost:4000']
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

const cors = require('cors')

app.use(cors(corsOptions))

app.get('/students', (req, res, next) => {
    const students = [
        {
            id: 1,
            firstName: "Andy",
            lastName: "Madadian"
        },
        {
            id: 2,
            firstName: "Mina",
            lastName: "Davoodi"
        },
        {
            id: 3,
            firstName: "Kouros",
            lastName: "Shahmir"
        },
        {
            id: 4,
            firstName: "Aazam",
            lastName: "Heidari"
        }
    ]


    res.send(students)
})

const PORT = process.env.PORT | 3000
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})