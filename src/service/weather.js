

const FETCH_OPTIONS = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key":
            "058d710861msh2dd367fb0a01910p16e31cjsn717568d6feff",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
}

export async function getWeatherFrom(query = 'Nueva Cajamarca') {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`;

    try {
        const response = await fetch(url, FETCH_OPTIONS);
        const result = await response.json();
        console.log(result);
        const { location, current } = result;
        const { country, localtime, name } = location;
        const { condition, humidity, feelslike_c, is_day, temp_c, wind_kph, wind_dir } = current;
        const { code, text } = condition;

        return {
            contidionCode: code,
            conditionText: text,
            country,
            localtime,
            name,
            humidity,
            isDay: is_day,
            feelsLike: feelslike_c,
            temperature: temp_c,
            windSpeed: wind_kph,
            windDir: wind_dir
        };
    } catch (error) {
        console.error(error);
    }



} 
