import { Message } from "discord.js";

export const messageCreate = async (message: Message) => {
    if (message.author.bot) return;
    if (message.content === "!ping") {
        message.reply("🏓 Pong (prefix)!");
    }
};
