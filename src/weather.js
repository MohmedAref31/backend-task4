const request = require("request");

async function weather(country , callback) {
  const url = `http://api.weatherapi.com/v1/current.json?key=6dce99c9603d4816bd3114915231707&q=${country}&aqi=no
    `;

 request({url, json:true},  (error,res)=>{
        // console.log(res.body)
        callback(res)
     
    })

    // return weather
}
// console.log(weather("egypt") );

module.exports = {
    weather
}