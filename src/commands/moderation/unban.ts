import {MessageFlagsBitField, PermissionsBitField, SlashCommandBuilder} from "discord.js";
import { Command } from "../../types/Command";
import {LogError} from "../../utils/LogHelper";

export let unban: Command;
unban = {
    data: new SlashCommandBuilder()
        .setName("unban")
        .setDescription("Unban a user by their ID")
        .addStringOption(option =>
            option.setName("userid")
                .setDescription("Enter the User ID of the person to unban")
                .setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionsBitField.Flags.BanMembers),

    async execute(interaction) {
        const userId = interaction.options.getString("userid", true);

        try {
            await interaction.guild?.bans.remove(userId);
            await interaction.reply(`✅ Successfully unbanned user with ID \`${userId}\`.`);
        } catch (error) {
            console.error(error);
            await interaction.reply({
                content: `❌ Failed to unban user with ID \`${userId}\`. Make sure the ID is correct and the user is banned.`,
                flags: MessageFlagsBitField.Flags.Ephemeral
            });
            LogError(error + "");
        }
    }
};
