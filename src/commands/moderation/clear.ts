import {
    MessageFlagsBitField,
    PermissionsBitField,
    SlashCommandBuilder, StageChannel
} from "discord.js";
import { Command } from "../../types/Command";
import { LogError } from "../../utils/LogHelper";

export let clear: Command;
clear = {
    data: new SlashCommandBuilder()
        .setName("clear")
        .setDescription("Delete a number of messages from this channel")
        .addIntegerOption(option =>
            option
                .setName("amount")
                .setDescription("How many messages to delete (max 100)")
                .setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionsBitField.Flags.ManageMessages),
    async execute(interaction) {
        const amount = interaction.options.getInteger("amount", true);

        if (amount < 1 || amount > 100) {
            await interaction.reply({
                content: "⚠️ Please provide a number between 1 and 100.",
                flags: MessageFlagsBitField.Flags.Ephemeral
            });
            return;
        }

        let channel = interaction.channel;

        if (!channel || !channel.isTextBased()) {
            await interaction.reply({
                content: "❌ This command can only be used in standard text channels.",
                flags: MessageFlagsBitField.Flags.Ephemeral
            });
            return;
        }

        channel = channel as StageChannel;

        try {
            const messages = await channel.bulkDelete(amount, true);

            if (messages.size > 0) {
                await interaction.reply({
                    content: `✅ Deleted ${messages.size} messages.`,
                    flags: MessageFlagsBitField.Flags.Ephemeral
                });
            } else{
                await interaction.reply({
                    content: `⚠️ Discord only allows deleting messages that are newer than 14 days!`,
                    flags: MessageFlagsBitField.Flags.Ephemeral
                });
            }

        } catch (error) {
            await interaction.reply({
                content: "❌ Something went wrong while trying to delete messages.",
                flags: MessageFlagsBitField.Flags.Ephemeral
            });
            LogError(error + "");
        }
    }
};
