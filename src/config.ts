import dotenv from "dotenv";
dotenv.config();

export const config = {
    token: process.env.DISCORD_TOKEN!,
    clientId: process.env.CLIENT_ID!, // optional für SlashCommand Deployment
};
