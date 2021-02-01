const fs = require('fs');
const express= require('express');
const path = require("path");
const hbs= require('hbs');
const app= express();
const port = process.env.PORT || 8000 ;

//public static path
const static_path = path.join(__dirname,"../public");
const templates_path= path.join(__dirname,"../templates/views");
const partial_path= path.join(__dirname,"../templates/partial");

let url = `http://api.openweathermap.org/data/2.5/weather?q=${citVal}&units=metric&appid=b7dbffc6d5fa7fcaf2cf6251b86d820d`;
      const response = await fetch(url);
      console.log(response);


      
app.set('view engine', 'hbs');
app.set('views',templates_path);
hbs.registerPartials(partial_path);

app.use(express.static(static_path));


//routing
app.get("/",(req, res)=>{
res.render("index")
})

app.get("/about",(req, res)=>{
    res.render("about")
    });

 app.get("/weather",(req, res)=>{
        res.render("weather")
        })


 app.get('*',(req, res)=>{
            res.render("404error");
            })

app.listen(port , () => {
console.log(`listening to the port at ${port}`)
})