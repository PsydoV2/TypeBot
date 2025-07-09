import {MessageFlagsBitField, PermissionsBitField, SlashCommandBuilder} from "discord.js";
import {Command} from "../../types/Command";
import {LogError} from "../../utils/LogHelper";

export let unmute: Command;
unmute = {
    data: new SlashCommandBuilder()
        .setName("unmute")
        .setDescription("Unmute a member")
        .addUserOption(option => option.setName("user").setDescription("User to unmute").setRequired(true))
        .setDefaultMemberPermissions(PermissionsBitField.Flags.MuteMembers),
    async execute(interaction)  {
        const user = interaction.options.getUser("user", true)

        const member = await interaction.guild?.members.fetch(user.id).catch(() => null);
        if (!member) {
            await interaction.reply({
                content: "❌ This user is not on the server or could not be fetched.",
                flags: MessageFlagsBitField.Flags.Ephemeral,
            })
            return;
        }

        if(!member.isCommunicationDisabled()){
            await interaction.reply({
                content: `⚠️ That user is not muted!`,
                flags: MessageFlagsBitField.Flags.Ephemeral,
            })
        }

        try{
            await  member.disableCommunicationUntil(0, "Unmuted")
            await interaction.reply(`✅ **${user.tag}** has been unmuted!`)
        } catch (error) {
            await interaction.reply({
                content: "❌ Something went wrong while trying to mute this user.",
                flags: MessageFlagsBitField.Flags.Ephemeral,
            })
            LogError(error + "")
        }
    }
}