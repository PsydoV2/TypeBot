import {
    MessageFlagsBitField,
    PermissionsBitField,
    SlashCommandBuilder, StageChannel
} from "discord.js";
import { Command } from "../../types/Command";
import { LogError } from "../../utils/LogHelper";

export let slowmode: Command;
slowmode = {
    data: new SlashCommandBuilder()
        .setName("slowmode")
        .setDescription("Set the slowmode delay for this channel")
        .addIntegerOption(option =>
            option
                .setName("seconds")
                .setDescription("Delay in seconds (0 to disable, max 21600)")
                .setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionsBitField.Flags.ManageChannels),
    async execute(interaction) {
        const seconds = interaction.options.getInteger("seconds", true);

        if (seconds < 0 || seconds > 21600) {
            await interaction.reply({
                content: "⚠️ Please provide a value between 0 and 21600 seconds (6 hours).",
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
            await channel.setRateLimitPerUser(seconds, `Set by ${interaction.user.tag}`);

            if (seconds > 0){
                await interaction.reply({
                    content: `✅ Slowmode has been set to **${seconds} seconds**.`,
                    flags: MessageFlagsBitField.Flags.Ephemeral
                });
            } else{
                await interaction.reply({
                    content: `✅ Slowmode deactivated.`,
                    flags: MessageFlagsBitField.Flags.Ephemeral
                });
            }
        } catch (error) {
            await interaction.reply({
                content: "❌ Something went wrong while setting the slowmode.",
                flags: MessageFlagsBitField.Flags.Ephemeral
            });
            LogError(error + "");
        }
    }
};
