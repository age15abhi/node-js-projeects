// check username , password in post (login) request
// if exist create new jwt
// send back to frontend
// setup authentication so only the requsest with jwt can access the dashboard


const jwt = require('jsonwebtoken')
const  {BadRequestError} = require('../errors')

const login = async (req, res) => {
    const { username, password } = req.body

    // mongoose validation 
    // joi  
    // check in the controller

    if (!username || !password) {
        throw new BadRequestError('please provide the email and the password')
    }

    //just for demo , normally provided bt DB!!!!!
    const id = new Date().getDate()


    // try to keep payload small . better experince for user 
    // just for demo , in production use long , complex and unguessable string value

    // 1st - Create token 
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' })
    // ---------------------

    res.status(200).json({ msg: 'user Created', token })
}

const dashboard = async (req, res) => {
    console.log(req.user)

    const luckyNumber = Math.floor(Math.random() * 100)
    res.json({ msg: `Hello , ${req.user.username}`, secret: `Here is your authorize data , your lucky number is ${luckyNumber}` })


}

module.exports = {
    login, dashboard
}