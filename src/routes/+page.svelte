<script>
    import { getWeatherFrom } from '../service/weather'
    const weatherPromise = getWeatherFrom();

</script>

{#await weatherPromise then weather}
    <h1>Ciudad: {weather.name}</h1>
{/await}

<style>
    h1 {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;
    }
</style>
