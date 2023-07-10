const express = require('express'),
    router = express.Router()



//http://localhost:3000/api/
router.get('/', (req, res) => {
   
    res.send('List of user')
})
const bcrypt = require("bcrypt")
router.post("/createUser", async (req,res) => {
    const user = req.body.name;
    const hashedPassword = await bcrypt.hash(req.body.password,10);
    const email = req.body.email;
    db.getConnection( async (err, connection) => {
     if (err) throw (err)
     const sqlSearch = "SELECT * FROM usertable WHERE username = ?"
     const search_query = mysql.format(sqlSearch,[user])
     const sqlInsert = "INSERT INTO usertable VALUES (0,?,?,?)"
     const insert_query = mysql.format(sqlInsert,[user, hashedPassword,email])
     
     await connection.query (search_query, async (err, result) => {
      if (err) throw (err)
      console.log("Search Results")
      console.log(result.length)
      if (result.length != 0) {
       connection.release()
       console.log("User already exists")
       res.sendStatus(409) 
      } 
      else {
       await connection.query (insert_query, (err, result)=> {
       connection.release()
       if (err) throw (err)
       console.log ("Created new User")
       console.log(result.insertId)
       res.sendStatus(201)
      })
     }
    }) 
    })
    }) 



module.exports = router;