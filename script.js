const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5c2ad51cc7mshb4d5a1ca7abe68fp1316e0jsnaeed0a0e9a5f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather= (city)=>{
    cityName.innerHTML=city;

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
                    console.log(response)

                    cloud_pct.innerHTML = response.cloud_pct
                    feels_like2.innerHTML = response.feels_like 
                    humidity2.innerHTML = response.humidity 
                    wind_speed2.innerHTML = response.wind_speed
                    feels_like.innerHTML = response.feels_like 
                    humidity.innerHTML = response.humidity 
                    min_temp.innerHTML = response.min_temp
                    max_temp.innerHTML = response.max_temp
                    wind_speed.innerHTML = response.wind_speed
                    wind_degrees.innerHTML = response.wind_degrees
                    sunrise.innerHTML = response.sunrise
                    sunset.innerHTML = response.sunset
    
    })
    .catch(err=> console.error(err))
}

search.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("delhi")