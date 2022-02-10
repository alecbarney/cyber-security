const bcrypt = require('bcryptjs')
const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
          const verified = bcrypt.compareSync(password, users[i].passwordHash)
          if (verified){
            let returnUser = {...users[i]}
            delete returnUser.passwordHash
            res.status(200).send(returnUser)
            console.log('logged in successfully')
          }else if(!verified && i == users.length ){
            res.status(400).send("User not found.")
            console.log('no user found')
          }
        }
      }
    },
    register: (req,res) => {
      const { username, email, firstName, lastName, password } = req.body
      const salt = bcrypt.genSaltSync(5)
      const passwordHash = bcrypt.hashSync(password, salt)
      let user = {
        username,
        email,
        firstName,
        lastName,
        passwordHash
      }
      users.push(user)
      let returnUser = {...user}
      delete returnUser.passwordHash
      res.status(200).send(returnUser)
    }
}