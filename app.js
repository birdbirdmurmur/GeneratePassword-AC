import express from "express";
import { engine } from "express-handlebars";
import generatePassword from "./generate_password.js";

const app = express()
const port = 3000

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
// app.use(express.static('public'))

app.use(express.urlencoded({ extended: true}))


//route
app.get('/', (req, res) =>{
    res.render('index')
})

app.post('/', (req, res) => {
    const password = generatePassword(req.body)
    res.render('index', { password: password })
})

app.listen(port, () =>{
    console.log(`Express is listening on localhost:${port}`)
})