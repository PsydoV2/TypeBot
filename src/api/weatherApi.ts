import fetch from "node-fetch";
import {WeatherResponse} from "../types/WeatherResponse";

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = process.env.OPEN_WEATHER_KEY;

export async function getWeather(city: string): Promise<WeatherResponse> {
    const url = `${API_URL}?q=${encodeURIComponent(city)}&units=metric&lang=de&appid=${apiKey}`;

    const res = await fetch(url);
    if (!res.ok) throw new Error(`Fehler beim Abrufen der Wetterdaten für ${city}`);

    return await res.json() as Promise<WeatherResponse>;
}
