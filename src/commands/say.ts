import { SlashCommandBuilder } from "discord.js";
import { Command } from "../types/Command";

export const say: Command = {
    data: new SlashCommandBuilder()
        .setName("say")
        .setDescription("You tell him what to say")
        .addStringOption(option =>
            option.setName("message")
                .setDescription("What should i say?")
                .setRequired(true)),
    async execute(interaction) {
        const text = interaction.options.getString("message", true);
        await interaction.reply(text);
    },
};
