import {MessageFlagsBitField, SlashCommandBuilder} from "discord.js";
import { Command } from "../../types/Command";

function generatePassword(length: number, useSymbols: boolean, useNumbers: boolean): string {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%&*()_+-=[]{}?";

    let characters = letters;
    if (useNumbers) characters += numbers;
    if (useSymbols) characters += symbols;

    return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join("");
}

let password: Command;
password = {
    data: new SlashCommandBuilder()
        .setName("password")
        .setDescription("Generate a secure password")
        .addNumberOption(option =>
            option.setName("length")
                .setDescription("How long should the password be?")
                .setRequired(true)
        )
        .addBooleanOption(option =>
            option.setName("symbols")
                .setDescription("Should symbols be included?")
                .setRequired(true)
        )
        .addBooleanOption(option =>
            option.setName("numbers")
                .setDescription("Should numbers be included?")
                .setRequired(true)
        ),

    async execute(interaction) {
        const length = interaction.options.getNumber("length", true);
        const symbols = interaction.options.getBoolean("symbols", true);
        const numbers = interaction.options.getBoolean("numbers", true);

        if (length < 4 || length > 100) {
            await interaction.reply({
                content:"❗ Password length must be between 4 and 100.",
                flags: MessageFlagsBitField.Flags.Ephemeral});
            return;
        }

        const password = generatePassword(length, symbols, numbers);
        await interaction.reply(`🔐 Password:\`\`\`${password}\`\`\``);
    }
};

export { password };
