import { Client, GatewayIntentBits, Collection, Events } from "discord.js";
import { config } from "./config";
import { ready } from "./events/ready";
import { messageCreate } from "./events/messageCreate";
import { ping } from "./commands/ping";

const client = new Client({
    intents: [GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.once(Events.ClientReady, () => ready(client));
client.on(Events.MessageCreate, messageCreate);

// Slash Commands registrieren
client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === ping.data.name) {
        await ping.execute(interaction, client);
    }
});

client.login(config.token);
