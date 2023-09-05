import axios from "axios";

export const getWeatherData = (query = 'Moyobamba') => {
    const cityName = query;
    const config = {
        headers: {
            'X-RapidAPI-Key': '058d710861msh2dd367fb0a01910p16e31cjsn717568d6feff',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        },
    };
    return axios.get(`https://weatherapi-com.p.rapidapi.com/current.json?q=${cityName}`, config)
};
