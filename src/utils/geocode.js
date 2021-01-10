const request=require('request');  

const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoidXRrYXJzaC0xLTIiLCJhIjoiY2tpa2h4ZzNxMDcyaDJzcGQweXZuMjN5bCJ9.KOg8M9l-77OoyPhUFIWQGQ&limit=1'
    request({url,json:true},(error,{body})=>{
        if(error){
          callback("There is no Internet connectivity to access geocoding api...",undefined);
        }
        else if(body.features.length>0){
          callback(undefined,{
             longitude:body.features[0].center[0],
             latitude:body.features[0].center[1],
             location:body.features[0].text,
                 }
                 )
        }
        else{
         callback("Please enter a valid location...",undefined);
        }
    })
}

module.exports=geocode;





