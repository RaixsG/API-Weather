<script>
    import FooterWeather from "../lib/footer-weather.svelte";

    import { getWeatherFrom } from "../service/weather";
    const weatherPromise = getWeatherFrom();
</script>

{#await weatherPromise then weather}
<div>
    <section>
        <h1>{weather.locationName}</h1>
        <h2>{weather.temperature}°</h2>
        <h3>{weather.conditionText}</h3>
    </section>
    <FooterWeather/>
</div>
{/await}

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
        top: 20px;
        right: 12px;
    }

</style>
