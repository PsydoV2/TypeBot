import { ChatInputCommandInteraction, Client, SlashCommandBuilder } from "discord.js";

export interface Command {
    data: SlashCommandBuilder;
    execute: (interaction: ChatInputCommandInteraction, client: Client) => Promise<void>;
}
