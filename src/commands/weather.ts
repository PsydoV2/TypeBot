import { SlashCommandBuilder } from "discord.js";
import { Command } from "../types/Command";
import { getWeather } from "../api/weatherApi";
import {WeatherResponse} from "../types/WeatherResponse";

export let weather: Command;
weather = {
    data: new SlashCommandBuilder()
        .setName("weather")
        .setDescription("Zeigt das aktuelle Wetter für eine Stadt")
        .addStringOption(opt =>
            opt.setName("stadt").setDescription("z. B. Berlin").setRequired(true)
        ),
    async execute(interaction) {
        const city = interaction.options.getString("stadt", true);
        try {
            const data: WeatherResponse = await getWeather(city);

            const weather = data.weather[0];
            const main = data.main;

            await interaction.reply(
                `🌍 **${data.name}**\n🌡️ ${main.temp}°C, ${weather.description}\n💧 Luftfeuchtigkeit: ${main.humidity}%\n🌬️ Wind: ${data.wind.speed} m/s`
            );
        } catch (err) {
            await interaction.reply(`❌ Fehler: ${err instanceof Error ? err.message : "Unbekannter Fehler"}`);
        }
    },
};
