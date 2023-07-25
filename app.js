import express from "express";
import { engine } from "express-handlebars";
import generatePassword from "./generate_password.js";

const app = express()
const port = 3000

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true}))

app.get('/', (req, res) =>{
    res.render('index')
})

app.post('/', (req, res) => {
    const options = req.body
    const password = generatePassword(options)
    res.render('index', { password: password, options: options})
})

app.listen(port, () =>{
    console.log(`Express is listening on localhost:${port}`)
})