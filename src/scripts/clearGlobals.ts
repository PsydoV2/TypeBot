import { REST, Routes } from "discord.js";
import { config } from "../config";

const rest = new REST().setToken(config.token);

(async () => {
    try {
        console.log("🧹 Lösche globale Slash-Commands...");

        const commands = await rest.get(Routes.applicationCommands(config.clientId)) as any[];

        for (const cmd of commands) {
            console.log(`❌ Lösche /${cmd.name}`);
            await rest.delete(Routes.applicationCommand(config.clientId, cmd.id));
        }

        console.log("✅ Alle globalen Befehle gelöscht.");
    } catch (err) {
        console.error("❌ Fehler beim Löschen:", err);
    }
})();
