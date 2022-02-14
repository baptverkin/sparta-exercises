import request from "@fewlines-education/request";
import "dotenv/config";

function weatherByZipcode(zipcode : string, countryCode: string): void {
  request (`http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},${countryCode}&units=metric&cnt=16&appid=${process.env.OPENWEATHER_API_KEY}`,
  (error, html) => {
    if(error){
      console.error(error);
    }else{
      const json = JSON.parse(html)
      console.log(`Weather for ${json.city.name}`);
      console.log(
        {
          date : `${json.list[0].dt_txt.substring(8, 10)}/${json.list[0].dt_txt.substring(5, 7)}/${json.list[0].dt_txt.substring(0, 4)}`,
          hour : `${json.list[0].dt_txt.substring(11)}`,
          temperature : `${json.list[0].main.temp} °C`,
          weather : `${json.list[0].weather[0].description}`,
        }
      )
    }
  })
}

function weatherByLatitudeAndLongitude(latitude: number, longitude: number): void {
  request (`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&cnt=16&appid=${process.env.OPENWEATHER_API_KEY}`,
  (error, html) => {
    if(error){
      console.error(error);
    }else{
      const json = JSON.parse(html)
      console.log(`Weather for ${json.city.name}`);
      console.log(
        {
          date : `${json.list[0].dt_txt.substring(8, 10)}/${json.list[0].dt_txt.substring(5, 7)}/${json.list[0].dt_txt.substring(0, 4)}`,
          hour : `${json.list[0].dt_txt.substring(11)}`,
          temperature : `${json.list[0].main.temp} °C`,
          weather : `${json.list[0].weather[0].description}`,
        }
      )
    }
  })
}

// leave lines below for tests to work properly
export {
  weatherByZipcode,
  weatherByLatitudeAndLongitude
}
