 const API_KEY = "e1ee0300cbafcc69c706df952d03d605";

    async function fetchWeather(){
        const city = document.getElementById("city").value.trim();
        const loading = document.getElementById("loading");
        const result = document.getElementById("result");
   
        if(city === ""){
            alert("Enter Your City");
            return;
        }
        loading.style.display = "block";
        result.innerHTML = "";

        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

            const response = await fetch(url);

            if(response.status === 404){
                loading.style.display = "none";
                alert("City not found! Enter a correct city.");
                return;
            }

            if(!response.ok){
                loading.style.display = "none";
                alert("Error fetching weather data.");
                return;
            }

            const data = await response.json();

            loading.style.display = "none";

            result.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p><img src="meter.png" class="weather.icon"><br>Temperature: ${data.main.temp}°C</p>
                <p> <img src="pic.png" class="weather.icon"><br>Weather: ${data.weather[0].description}</p>
                <p><img src="humidity.png" class="weather.icon"><br> Humidity: ${data.main.humidity}%</p>
                <p> <img src="nature.png" class="weather.icon"><br>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        }
        catch(error){
            loading.style.display = "none";
            alert("Network error or API error!");
        }
    }
    
        
    