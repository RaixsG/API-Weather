<script>
    import { getWeatherFrom } from "../service/weather";
    const weatherPromise = getWeatherFrom();
</script>

{#await weatherPromise then weather}
    <h1>Ciudad: {weather.name}</h1>
{/await}

<style>
    /* apply a natural box layout model to all elements, but allowing components to change */
    :global(html) {
        box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    :global(body) {
        background-color: #222;
        color: #f5f5f5;
    }

    h1 {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;
    }
</style>
