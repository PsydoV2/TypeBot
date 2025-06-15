import {
    ChatInputCommandInteraction,
    Client,
    SlashCommandBuilder,
    SlashCommandSubcommandBuilder,
    SlashCommandSubcommandsOnlyBuilder,
    SlashCommandOptionsOnlyBuilder,
} from "discord.js";

export interface Command {
    data:
        | SlashCommandBuilder
        | SlashCommandSubcommandsOnlyBuilder
        | SlashCommandOptionsOnlyBuilder
        | SlashCommandSubcommandBuilder;
    execute: (interaction: ChatInputCommandInteraction, client: Client) => Promise<void>;
}
