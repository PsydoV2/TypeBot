import { Client, GatewayIntentBits, Events, Interaction } from "discord.js";
import { config } from "./config";
import { ready } from "./events/ready";
import commands from "./commands";
import { log, error } from "./utils/logger";

// Discord-Client mit gewünschten Intents
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildModeration
    ],
});

// Wird einmal ausgeführt, wenn der Bot bereit ist
client.once(Events.ClientReady, () => {
    ready(client);
});

// Wird bei jeder Interaktion (z.B. Slash-Command) aufgerufen
client.on(Events.InteractionCreate, async (interaction: Interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const command = commands.get(interaction.commandName);
    if (!command) return;

    try {
        await command.execute(interaction, client);
    } catch (err) {
        error("Fehler beim Ausführen des Befehls:", err);
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({
                content: "❌ Beim Ausführen des Befehls ist ein Fehler aufgetreten.",
                ephemeral: true,
            });
        } else {
            await interaction.reply({
                content: "❌ Beim Ausführen des Befehls ist ein Fehler aufgetreten.",
                ephemeral: true,
            });
        }
    }
});

// Bot starten
client.login(config.token).then(r => log(r));
