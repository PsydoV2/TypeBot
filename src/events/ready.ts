import { Client } from "discord.js";
import { log } from "../utils/logger";

export const ready = (client: Client) => {
    log(`Bot eingeloggt als ${client.user?.tag}`);
};
