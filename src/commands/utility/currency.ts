import { Command } from "../../types/Command";
import {MessageFlagsBitField, MessageFlagsResolvable, SlashCommandBuilder} from "discord.js";
import { getCurrentRate } from "../../api/currencyApi";
import { CurrencyResponse } from "../../types/CurrencyResponse";
import {LogError} from "../../utils/LogHelper";

export let currency: Command;
currency = {
    data: new SlashCommandBuilder()
        .setName("currency")
        .setDescription("Get current rate of one or more currency pairs")
        .addStringOption(option =>
            option.setName("currencycode")
                .setDescription("Codes of currencies, e.g. EURUSD or EURUSD,USDJPY")
                .setRequired(true)
        ),

    async execute(interaction) {
        const currencyCode = interaction.options.getString("currencycode", true).toUpperCase().replace(/\s+/g, "");

        try {
            const response: CurrencyResponse = await getCurrentRate(currencyCode);

            if (!response.rates || Object.keys(response.rates).length === 0) {
                await interaction.reply({
                    content: "⚠️ No Rates found!",
                    flags: MessageFlagsBitField.Flags.Ephemeral
                });
                return;
            }

            const replyText = Object.entries(response.rates)
                .map(([pair, info]) => {
                    const date = new Date(info.timestamp).toLocaleString("de-DE");
                    return `💱 **${pair}**: ${info.rate} _(Stand: ${date})_`;
                })
                .join("\n");

            await interaction.reply(replyText);
        } catch (error) {
            await interaction.reply({
                content: `❌ Error while fetching rate: ${error instanceof Error ? error.message : "Unknown Error"}`,
                flags: MessageFlagsBitField.Flags.Ephemeral,

            });
            LogError(error + "")
        }
    }
};
