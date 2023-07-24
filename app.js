import express from "express";
import { engine } from "express-handlebars";
// import bodyParser from "body-parser";
// import restaurantList from "./restaurant.json" assert { type: 'json' }

const app = express()
const port = 3000

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true}))


//route
app.get('/', (req, res) =>{
    res.render('index')
})

app.post('/', (req, res) =>{
    console.log(req.body)
    res.render('index')
})

app.listen(port, () =>{
    console.log(`Express is listening on localhost:${port}`)
})