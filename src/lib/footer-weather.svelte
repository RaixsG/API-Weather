<script>
    import { onMount } from "svelte";
    import { getWeatherData } from "../service/weather";

    //? INITIAL WEATHER VALUES
    let weatherData = {
        humidity: null,
        windSpeed: null,
        feelsLike: null,
    };

    //? SCRRENS STATES
    let loading = false;
    let error = false;

    //? API REQUEST
    onMount(() => {
        loading = true;
        getWeatherData()
            .then(response => {
                const currentData = response.data.current;
                weatherData.humidity = currentData.humidity;
                weatherData.windSpeed = currentData.wind_kph;
                weatherData.feelsLike = currentData.feelslike_c;
            })
            .catch(error => {
                console.log(`Error in "getWeatherData": ${JSON.stringify(error)}`);
                error = true;
            }).finally(() => loading = false);
    
    });
</script>

<footer>
    <div>
        <span>
            { loading ? 'Cargando' : '' }
            { error ? 'Error' : '' }
            { weatherData ? weatherData.humidity : '' }
        </span>
        <strong>
            Humidity
        </strong>
    </div>

    <div>
        <span>
            { loading ? 'Cargando' : '' }
            { error ? 'Error' : '' }
            { weatherData ? weatherData.windSpeed : '' }
        </span>
        <strong>
            Windspeed
        </strong>
    </div>

    <div>
        <span>
            { loading ? 'Cargando' : '' }
            { error ? 'Error' : '' }
            { weatherData ? `${weatherData.feelsLike}º` : '' }
        </span>
        <strong>
            Feels like
        </strong>
    </div>
</footer>
<style>
    footer {
        border: 2px solid #f5f5f5;
        padding: 32px;
        width: 80%;
        margin: 0 auto;
        border-radius: 10px;
        display: flex;
        text-align: center;
        justify-content: space-around;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 32px;
    }

    span {
        display: block;
        font-size: 14px;
    }

    strong {
        font-weight: 600;
        font-size: 14px;
    }
</style>
