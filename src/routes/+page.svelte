<script>
    import { onMount } from "svelte";
    import FooterWeather from "../lib/footer-weather.svelte";
    import { getWeatherData } from "../service/weather";
    import LoadingWait from "../img/animations/LoadingWait.svelte";

    //? SCRRENS STATES
    let error = false;

    //? INITIAL WEATHER VALUES
    let weatherData = null;

    // Geolocation
    let coords = null;

    const getCoords = () => {
        const success = (pos) => {
            const latAndLon = {
                lat: pos.coords.latitude,
                lon: pos.coords.longitude,
            };
            coords = `${latAndLon.lat},${latAndLon.lon}`;
        };
        navigator.geolocation.getCurrentPosition(success);
    };

    $: if (coords) {
        getWeatherData(coords)
            .then((response) => {
                const locationData = response.data.location;
                const currentData = response.data.current;
                weatherData = {
                    locationName: locationData.name,
                    temperature: currentData.temp_c,
                    conditionText: currentData.condition.text,
                    icon: currentData.condition.icon,
                    humidity: currentData.humidity,
                    windSpeed: currentData.wind_kph,
                    feelsLike: currentData.feelslike_c,
                };
            })
            .catch((error) => {
                console.log(
                    `Error in "getWeatherData": ${JSON.stringify(error)}`
                );
                error = true;
            });
    }

    onMount(getCoords);
</script>

{#if !weatherData?.locationName}
    <LoadingWait />
{:else}
    <div>
        <section>
            <h1>
                {#if error}'Error'{/if}
                {#if !error}{weatherData?.locationName}{/if}
            </h1>
            <h2>
                {#if error}'Error'{/if}
                {#if !error}{weatherData?.temperature}°{/if}
            </h2>
            <h3>
                {#if error}'Error'{/if}
                {#if !error}{weatherData?.conditionText}{/if}
            </h3>
        </section>
        <section class="imgIcon">
            {error ? "Error" : ""}
            <img src={weatherData?.icon} alt="Icon" />
        </section>
        <FooterWeather
            {error}
            humidity={weatherData?.humidity}
            windSpeed={weatherData?.windSpeed}
            feelsLike={weatherData?.feelsLike}
        />
    </div>
{/if}

<style>
    /* apply a natural box layout model to all elements, but allowing components to change */
    :global(html) {
        box-sizing: border-box;
    }

    :global(*, *:before, *:after) {
        box-sizing: inherit;
    }

    :global(body) {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;

        background-color: #222;
        color: #f5f5f5;
        display: grid;
        place-content: center;
        min-height: 100vh;
    }

    :global(h1, h2, h3, h4, h5) {
        margin: 0;
    }

    div {
        aspect-ratio: 9 / 16;
        width: 400px;
        max-width: 100%;
        display: block;
        box-shadow: 0 0 100px rgba(200, 200, 200, 0.3);
        border-radius: 8px;
        position: relative;
    }

    section {
        padding: 16px;
    }

    h1 {
        font-weight: 300;
        text-transform: uppercase;
        padding: 32px 0 16px 16px;
    }

    h2 {
        font-weight: 400;
        font-size: 150px;
    }

    h3 {
        font-weight: 400;
        transform: rotate(-90deg);
        position: absolute;
        top: 35px;
        right: 35px;

        max-width: 100%;
        width: 70px;
    }

    div .imgIcon {
        display: grid;
        justify-items: center;
    }

    img {
        max-width: 100%;
        width: 150px;
        height: auto;
    }
</style>
