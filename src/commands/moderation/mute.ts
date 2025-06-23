import {Integration, MessageFlagsBitField, PermissionsBitField, SlashCommandBuilder} from "discord.js";
import {Command} from "../../types/Command";
import "../../utils/LogHelper"
import {LogError} from "../../utils/LogHelper";

export let mute: Command;
mute = {
    data: new SlashCommandBuilder()
        .setName("mute")
        .setDescription("Mute a user")
        .addUserOption(option => option.setName("user").setDescription("The user who should be muted").setRequired(true))
        .addIntegerOption(option => option.setName("duration").setDescription("Duration of the mute in seconds").setRequired(true))
        .addStringOption(option => option.setName("reason").setDescription("Reason of the mute").setRequired(false))
        .setDefaultMemberPermissions(PermissionsBitField.Flags.MuteMembers),
    async execute(interaction){
        const user = interaction.options.getUser("user", true);
        const duration = interaction.options.getInteger("duration", true);
        const reason = interaction.options.getString("reason", false) || "No reason provided";

        if (duration === 0){
            await interaction.reply({
                content: "⚠️ The duration must be greater than 0",
                flags: MessageFlagsBitField.Flags.Ephemeral
            })
            return
        }

        if (user.id === interaction.user.id){
            await interaction.reply({
                content: "⚠️ You cant mute yourself!",
                flags: MessageFlagsBitField.Flags.Ephemeral,
            })
            return
        }

        if (user.id === interaction.client.user.id){
            await interaction.reply({
                content: "⚠️ You can't mute me! Nice try.",
                flags: MessageFlagsBitField.Flags.Ephemeral
            });
            return;
        }

        const member = await interaction.guild?.members.fetch(user.id).catch(() => null);
        if (!member) {
            await interaction.reply({
                content: "❌ This user is not on the server or could not be fetched.",
                flags: MessageFlagsBitField.Flags.Ephemeral,
            })
            return;
        }

        try{
            await  member.disableCommunicationUntil(duration, reason)
            await interaction.reply(`✅ **${user.tag}** has been muted for ${duration} seconds.\n📝 Reason: *${reason}*`)
        } catch (error) {
            await interaction.reply({
                content: "❌ Something went wrong while trying to mute this user.",
                flags: MessageFlagsBitField.Flags.Ephemeral,
            })
            LogError(error + "")
        }
    }
}