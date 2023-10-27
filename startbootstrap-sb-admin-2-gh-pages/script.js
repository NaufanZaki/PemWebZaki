document.addEventListener("DOMContentLoaded", function () {
    // Define the API URL for weather data
    const apiWeatherUrl = "https://api.open-meteo.com/v1/forecast?latitude=-7.257472&longitude=112.752090&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m";

    // Function to fetch weather data and update the DOM
    function fetchWeatherData() {
        fetch(apiWeatherUrl)
            .then((response) => response.json())
            .then((data) => {
                const currentWeather = data.current_weather;
                const temperature = currentWeather.temperature;
                const humidity = currentWeather.relativehumidity_2m;
                const windSpeed = currentWeather.windspeed;

                const weatherInfoDiv = document.getElementById("weather-info");
                if (weatherInfoDiv) {
                    weatherInfoDiv.innerHTML = `
                        <div class="card border-left-primary shadow h-100 py-2">
                            <div class="card-body">
                                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    Weather</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">
                                    Temperature: ${temperature}°C</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">
                                    Humidity: ${humidity}%</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">
                                    Wind Speed: ${windSpeed} m/s</div>
                            </div>
                        </div>
                    `;
                }
            })
            .catch((error) => {
                console.error("Error fetching weather data:", error);
            });
    }

    // Function to fetch movie data using the provided code
    function fetchOmdbData() {
        const titleInput = document.getElementById("search-input");


        fetch(`http://www.omdbapi.com/?t=${titleInput.value}&apikey=ef640c70`)
            .then((response) => response.json())
            .then((data) => {
                // const posterInfo = document.getElementById("posterInfo");
                const titleInfo = document.getElementById("titleInfo");
                const yearInfo = document.getElementById("yearInfo");
                const genreInfo = document.getElementById("genreInfo");
                const directorInfo = document.getElementById("directorInfo");
                const actorInfo = document.getElementById("actorInfo");
                const ratingInfo = document.getElementById("ratingInfo");

                titleInfo.innerHTML = `Title: ${data.Title}`;
                yearInfo.innerHTML = `Year Released: ${data.Year}`;
                genreInfo.innerHTML = `Genre: ${data.Genre}`;
                directorInfo.innerHTML = `Director: ${data.Director}`;
                actorInfo.innerHTML = `Actor: ${data.Actors}`;
                ratingInfo.innerHTML = `Rating: ${data.imdbRating}`;

                const image = data.Poster;
                const posterImage = document.querySelector('.card-body img');
                posterImage.src = image;
                // posterImage.src = data.poster;
            })
            .catch((error) => {
                console.error('Terjadi kesalahan:', error);
                const movieTitle = document.getElementById("movieTitle");
                movieTitle.innerHTML = 'Terjadi kesalahan saat mengambil data';
            });
    }

    // Get references to HTML elements
    const searchButton = document.getElementById("search-button");

    // Add click event listener to the search button
    if (searchButton) {
        searchButton.addEventListener("click", function () {
            fetchOmdbData();
        });
    }

    // Call the fetchWeatherData function to load weather data when the page loads
    fetchWeatherData();
});
