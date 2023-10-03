document.addEventListener("DOMContentLoaded", function () {
    // Define the API URL
    const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=-7.257472&longitude=112.752090&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m";
 
    // Function to fetch weather data and update the DOM
    function fetchWeatherData() {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                const currentWeather = data.current_weather;
                const temperature = currentWeather.temperature;
                const humidity = currentWeather.relativehumidity_2m;
                const windSpeed = currentWeather.windspeed;
 
                // Update the HTML to display weather information
                const weatherInfoDiv = document.getElementById("weather-info");
                if (weatherInfoDiv) {
                    weatherInfoDiv.innerHTML = `
                
                    <div class="card border-left-primary shadow h-100 py-2">
                    <div class="card-body">
                    <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                        Weather</div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                        Temperature: ${temperature}°C</div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                        Humidity: ${humidity}%</div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                        Wind Speed: ${windSpeed} m/s</div>
                </div>
                    `;
                }
            })
            .catch((error) => {
                console.error("gaada euy:", error);
            });
    }
 
    // Call the fetchWeatherData function to load weather data when the page loads
    fetchWeatherData();
 });
 