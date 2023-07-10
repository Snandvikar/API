const express = require('express'),
    app = express();
    bodyparser = require('body-parser');
// require('express-async-errors')

const db = require('./db')


app.use(express.json())


    userRoutes = require('./controllers/user.controller')


// //middleware
// app.use(bodyparser.json())
app.use('/api', userRoutes)
app.use((err, req, res, next) => {
    console.log(err)
    res.status(err.status || 500).send('Something went wrong!')
})


// db connection 
//then start the express server.
db.query("SELECT 1")
    .then(() => {
        console.log('db connection  succeeded.')
        app.listen(3000,
            () => console.log('server started at 3000'))
    })
    .catch(err => console.log('db connection failed. \n' + err))
