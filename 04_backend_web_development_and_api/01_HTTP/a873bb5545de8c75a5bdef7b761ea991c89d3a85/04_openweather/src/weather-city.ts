import request from "@fewlines-education/request";
import "dotenv/config";

// let cityLat = 0;
// let cityLon = 0;


function weatherByCity(city: string): void {
  // request (`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.OPENWEATHER_API_KEY}`,
  // (error, html)=>{
  //   if(error){
  //     console.error(error);
  //   }else{
  //     const json = JSON.parse(html)
  //     console.log(json[0].lat)
  //     console.log(json[0].lon)
  //     cityLat = json[0].lat;
  //     cityLon = json[0].lon;
  //   }
  // });
  request(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`,
  (error, html) => {
    if(error){
      console.error(error);
    }else{
      const json = JSON.parse(html)
      console.log(`${json.main.temp} °C`)
    }
  })
}

// leave lines below for tests to work properly
export { weatherByCity }


