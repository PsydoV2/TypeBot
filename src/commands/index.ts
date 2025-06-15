import fs from "fs";
import path from "path";
import { Command } from "../types/Command";

const commands = new Map<string, Command>();

const files = fs.readdirSync(__dirname).filter(file => file.endsWith(".ts") || file.endsWith(".js"));

for (const file of files) {
    if (file === "index.ts") continue; // sich selbst ignorieren

    const { [file.replace(".ts", "")]: command } = require(`./${file}`) as Record<string, Command>;

    if (command && command.data && typeof command.execute === "function") {
        commands.set(command.data.name, command);
    }
}

export default commands;
