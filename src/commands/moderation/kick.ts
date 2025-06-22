import {MessageFlagsBitField, PermissionsBitField, SlashCommandBuilder} from "discord.js";
import {Command} from "../../types/Command";
import {LogError} from "../../utils/LogHelper";

export let kick: Command;
kick = {
    data: new SlashCommandBuilder()
        .setName("kick")
        .setDescription("Kick a User")
        .addUserOption(option => option.setName("user").setDescription("User who should be kicked").setRequired(true))
        .addStringOption(option => option.setName("reason").setDescription("Reason for the kick").setRequired(false))
        .setDefaultMemberPermissions(PermissionsBitField.Flags.KickMembers),
    async execute(interaction) {
        const targetUser = interaction.options.getUser("user", true);
        const reason = interaction.options.getString("reason", false);
        const kickedByMsg = ` - Kicked by ${interaction.user.username}`

        if (targetUser.id === interaction.user.id ) {
            await interaction.reply({
                content: "⚠️ You cant kick yourself!",
                flags: MessageFlagsBitField.Flags.Ephemeral
            })
            return
        }

        if (targetUser.id === interaction.client.user.id) {
            await interaction.reply({
                content: "⚠️ You can't kick me! Nice try.",
                flags: MessageFlagsBitField.Flags.Ephemeral
            });
            return;
        }

        const member = await  interaction.guild?.members.fetch(targetUser.id).catch(() => null);
        if (!member) {
            await interaction.reply({
                content: "❌ This user is not on the server or could not be fetched.",
                flags: MessageFlagsBitField.Flags.Ephemeral,
            })
            return;
        }

        if (!member.kickable){
            await interaction.reply({
                content: "❌ I cannot kick this user. They may have a higher role than me or be a server admin.",
                flags: MessageFlagsBitField.Flags.Ephemeral,
            })
            return;
        }

        try{
            await member.kick(reason ? reason + kickedByMsg : "No reason given!" + kickedByMsg)
            await interaction.reply(`✅ **${targetUser.tag}** has been kicked.\n📝 Reason: *${reason + kickedByMsg}*`)
        } catch (error) {
            await interaction.reply({
                content: "❌ Something went wrong while trying to kick this user.",
                flags: MessageFlagsBitField.Flags.Ephemeral,
            })
            LogError(error + "")
        }
    }
}