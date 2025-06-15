import {SlashCommandBuilder} from "discord.js";
import { Command } from "../types/Command";

export let help: Command;
help = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("List all available commands and how to use them."),

    async execute(interaction) {
        const stringText = `
📖 **Available Commands**

🔧 Utils:
🔹 \`/currency <code>\`  
Get current exchange rate(s) for one or more currency pairs.  
_Example: \`/currency EURUSD\`, \`/currency EURUSD,USDJPY\`_

🔹 \`/weather <city>\`  
Get current weather info for a given location.  
_Example: \`/weather Berlin\`_

🔹 \`/password <length> <symbols> <numbers>\`  
Generate a secure password based on your preferences.  
_Example: \`/password length: 12 symbols: true numbers: true\`_

🔹 \`/help\`  
Show this help message.

—

Need more features? Let the developer know 😎
        `;

        await interaction.reply({
            content: stringText.trim()
        });
    }
};
