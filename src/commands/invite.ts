import {
    SlashCommandBuilder,
    EmbedBuilder,
    ButtonBuilder,
    ButtonStyle,
    ActionRowBuilder
} from "discord.js";
import { Command } from "../types/Command";

export let invite: Command;

invite = {
    data: new SlashCommandBuilder()
        .setName("invite")
        .setDescription("Invite me to your server!"),

    async execute(interaction) {
        const inviteUrl = "https://discord.com/oauth2/authorize?client_id=1383532014267007046&permissions=582047995522134&integration_type=0&scope=bot";

        const embed = new EmbedBuilder()
            .setTitle("🚀 Invite TypeBot")
            .setDescription("Click the button below to invite me to your server and unlock powerful features like moderation, tools, and fun commands!")
            .setColor(0x5865F2) // Discord blurple
            .setThumbnail(interaction.client.user?.displayAvatarURL() || "")
            .setFooter({ text: "TypeBot – your all-in-one sidekick", iconURL: interaction.client.user?.displayAvatarURL() || "" });

        const button = new ButtonBuilder()
            .setLabel("Invite TypeBot")
            .setURL(inviteUrl)
            .setStyle(ButtonStyle.Link);

        const row = new ActionRowBuilder<ButtonBuilder>().addComponents(button);

        await interaction.reply({ embeds: [embed], components: [row] });
    }
};
