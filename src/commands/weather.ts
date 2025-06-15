import { SlashCommandBuilder } from "discord.js";
import { Command } from "../types/Command";
import { getWeather } from "../api/weatherApi";
import {WeatherResponse} from "../types/WeatherResponse";

export let weather: Command;
weather = {
    data: new SlashCommandBuilder()
        .setName("weather")
        .setDescription("Shows current weather for a City")
        .addStringOption(opt =>
            opt.setName("city").setDescription("e.X. Berlin").setRequired(true)
        ),
    async execute(interaction) {
        const city: string = interaction.options.getString("city", true);
        try {
            const data: WeatherResponse = await getWeather(city);

            const weather = data.weather[0];
            const main = data.main;

            await interaction.reply(
                `🌍 **${data.name}**\n🌡️ ${main.temp}°C, ${weather.description}\n💧 Humidity: ${main.humidity}%\n🌬️ Wind: ${data.wind.speed} m/s`
            );
        } catch (err) {
            await interaction.reply(`❌ Error: ${err instanceof Error ? err.message : "Unknown Error"}`);
        }
    },
};
