import { REST, Routes } from "discord.js";
import { config } from "../config";
import commands from "../commands";

const rest = new REST().setToken(config.token);
const commandData = Array.from(commands.values()).map(cmd => cmd.data);

(async () => {
    try {
        console.log("🌐 Registriere globale Slash-Commands...");

        commandData.forEach(cmd => console.log(`🔧 /${cmd.name}`));

        await rest.put(
            Routes.applicationCommands(config.clientId),
            { body: commandData }
        );

        console.log("✅ Globale Slash-Commands wurden erfolgreich registriert.");
        console.log("⏳ Achtung: Globale Commands können bis zu 1 Stunde zur Aktivierung benötigen.");
    } catch (err) {
        console.error("❌ Fehler beim Registrieren globaler Commands:", err);
    }
})();
