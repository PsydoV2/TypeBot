import { REST, Routes } from "discord.js";
import { config } from "../config";
import commands from "../commands";

// ✅ GUILD-ID deines Testservers
const GUILD_ID = "937698716050133022"; // <--- eigene ID einsetzen

const rest = new REST().setToken(config.token);
const commandData = Array.from(commands.values()).map(cmd => cmd.data);

(async () => {
    try {
        console.log("📡 Slash-Commands werden GUILD-spezifisch registriert...");

        commandData.forEach(cmd => console.log(`🔧 /${cmd.name}`));

        await rest.put(
            Routes.applicationGuildCommands(config.clientId, GUILD_ID),
            { body: commandData }
        );

        console.log("✅ Erfolgreich registriert!");
    } catch (err) {
        console.error("❌ Fehler:", err);
    }
})();
