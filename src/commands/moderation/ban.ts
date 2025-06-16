import {MessageFlagsBitField, SlashCommandBuilder} from "discord.js";
import {Command} from "../../types/Command";

export let ban: Command;
ban = {
    data: new SlashCommandBuilder()
        .setName("ban")
        .setDescription("Ban a User!")
        .addUserOption(option => option.setName("user").setDescription("The User u want to ban!").setRequired(true))
        .addStringOption(option => option.setName("reason").setDescription("The reason for the ban").setRequired(false))
        .addIntegerOption(option => option.setName("minutes").setDescription("Amount of Minutes of which Messages from the banned User should be deleted").setRequired(false)),
    async execute(interaction){
        const targetUser = interaction.options.getUser("user", true);
        const secondsDelete = (interaction.options.getInteger("minutes", false) || 0) * 60;
        const reason = interaction.options.getString("reason", false) || "" + ` - Banned by ${interaction.user.id}`

        if (targetUser.id === interaction.user.id){
            await interaction.reply({
                content: "⚠️ You cant ban yourself!",
                flags: MessageFlagsBitField.Flags.Ephemeral
            })
            return
        }

        if (targetUser.id === interaction.client.user.id){
            await interaction.reply({
                content: "️⚠️ You can't ban me! Nice try.",
                flags: MessageFlagsBitField.Flags.Ephemeral
            })
            return
        }

        const member = await interaction.guild?.members.fetch(targetUser.id).catch(() => null);
        if (!member) {
            await interaction.reply({
                content: "❌ This user is not on the server or could not be fetched.",
                flags: MessageFlagsBitField.Flags.Ephemeral
            })
            return
        }

        if (!member.bannable){
            await interaction.reply({
                content: "❌ I cannot ban this user. They may have a higher role than me or be a server admin.",
                flags: MessageFlagsBitField.Flags.Ephemeral
            })
        }

        try{
            await member.ban({
                reason: reason,
                deleteMessageSeconds: secondsDelete
            })
            await interaction.reply(`✅ **${targetUser.tag}** has been banned.`)
        } catch(error){
            await interaction.reply({
                content: "❌ Something went wrong while trying to ban this user!",
                flags: MessageFlagsBitField.Flags.Ephemeral,
            })
        }
    }
}