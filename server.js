const express = require('express'); //inyeccción de la dependencia
let app = express();
let PORT = process.env.PORT || 3000; //definición del puerto de la dependencia
app.use('/assets', express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: false})); //especifica que vamos a Parsear peticiones

app.set('view engine','ejs');

app.get('/', (req,res)=>{
    res.send(`<!DOCTYPE html> <html lang="en"> <head><link rel="stylesheet" href="/assets/style.css">
    <body> <h1>Hola mundo </h1>
    </body> </html>`)
});

app.get('/person/:id',(req,res)=>{
    res.render('/person',{Name: req.params.id, Message:req.query.message, Times: req.query.times});
});

//necesario para renderizar la vista index.js
app.get('/student', (req,res)=>{
    res.render('index');
});

app.post('/student', (req,res)=>{
    res.send(`First name es: ${req.body.fname}, Last name es: ${req.body.lname}`);
})

app.listen(PORT);