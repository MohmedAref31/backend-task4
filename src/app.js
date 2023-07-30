const weather = require("./weather")
const express = require("express");
const app = express();
const path = require("path")
const hbs = require("hbs")
const port  = 3000

app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname,"../views/partials"))
app.get("/",(req,res)=>{
    res.render("index",{
        title:"home"
    })
})

let data = {}
weather.weather("egypt",async (res)=>{
   data= {
        country:res.body.location.country,
        lat:res.body.location.lat,
        lon:res.body.location.lon,
        weather:res.body.current.condition.text,
        icon:res.body.current.condition.icon,
        temp:res.body.current.temp_c
    }
  
})

app.get("/check",(req, res)=>{
    res.render("check",{
        country:data.country,
        lat:data.lat,
        lon:data.lon,
        weather:data.weather,
        icon:data.icon,
        temp:data.temp
    })
})

app.listen(port,()=>{
    console.log("app is listining on " + port)
} )