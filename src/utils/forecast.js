const request=require('request');


const forecast=(latitude,longitude,callback)=>{
const url='http://api.weatherstack.com/current?access_key=81dce11ee973563d338ed80bef59bbee&query='+latitude+','+longitude
request({url,json:true},(error,{body})=>{
    if(error){
        callback("There is no Internet connectivity to access weather api...",undefined)
    }
    else if(body.error){
        callback("Please enter a valid  coordinates...",undefined)
    }
    else{
        callback(undefined,body.current)
    }
})

}

module.exports=forecast;