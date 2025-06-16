import fs from "fs";
import path from "path";
import { Command } from "../types/Command";

const commands = new Map<string, Command>();

// Gehe rekursiv durch alle Unterordner
function loadCommands(dir: string) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            loadCommands(fullPath); // rekursiv
        } else if (file.endsWith(".ts") || file.endsWith(".js")) {
            if (file === "index.ts" || file === "index.js") continue;

            const mod = require(fullPath) as Record<string, Command>;
            const command: Command = mod.default || mod[Object.keys(mod)[0]];

            if (command?.data?.name && typeof command.execute === "function") {
                commands.set(command.data.name, command);
            } else {
                console.warn(`⚠️ Invalid command in ${fullPath}`);
            }
        }
    }
}

const baseDir = __dirname; // /commands
loadCommands(baseDir);

export default commands;
