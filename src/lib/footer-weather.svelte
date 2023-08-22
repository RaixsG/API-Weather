<script>
    import { getWeatherFrom } from "../service/weather";
    const weather = getWeatherFrom();
</script>

<footer>
    <div>
        <span>
            33%
        </span>
        <strong>
            Humidity
        </strong>
    </div>

    <div>
        <span>
            12 km/h
        </span>
        <strong>
            Windspeed
        </strong>
    </div>

    <div>
        <span>
            12°
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
