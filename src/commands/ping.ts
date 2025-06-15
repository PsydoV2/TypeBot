import { SlashCommandBuilder } from "discord.js";
import { Command } from "../types/Command";

export let ping: Command;
ping = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Antwortet mit Pong!"),
    async execute(interaction) {
        await interaction.reply("🏓 Pong!");
    },
};
