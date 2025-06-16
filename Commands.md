## ⚖️ **0. Moderation**
| Befehl                             | Beschreibung                                                        |
|------------------------------------|---------------------------------------------------------------------|
| `/kick <user> <reason>`            | Kickt ein Mitglied vom Server (mit optionalem Grund).               |
| `/ban <user> <reason>`             | Bannt ein Mitglied dauerhaft vom Server.                            |
| `/unban <userid>`                  | Entbannt ein Mitglied anhand seiner User-ID.                        |
| `/mute <user> <duration> <reason>` | Verhindert Nachrichten & Sprache für eine Zeitspanne (Rolle nötig). |
| `/unmute <user>`                   | Hebt das Mute auf.                                                  |
| `/warn <user> <reason>`            | Schickt dem User eine Warnung (und optional DM).                    |
| `/clear <amount>`                  | Löscht eine bestimmte Anzahl an Nachrichten im aktuellen Channel.   |
| `/slowmode <seconds>`              | Setzt den Slowmode im Channel.                                      |
| `/lockchannel` / `/unlockchannel`  | Sperrt/entsperrt den aktuellen Channel für @everyone.               |
| `/userinfo <user>`                 | Zeigt Infos über ein Mitglied (Beitritt, Rollen, ID, etc.).         |
| `/serverinfo`                      | Zeigt allgemeine Serverinformationen.                               |

---

## 🕓 **1. Zeit & Planung**

| Command                 | Nutzen                                                       |
|-------------------------|--------------------------------------------------------------|
| `/remind <text> <time>` | Persönliche Erinnerung (z. B. in 1h, morgen um 12 Uhr)       |
| `/countdown <date>`     | Countdown bis zu einem Event, z. B. Release, Prüfung, Urlaub |
| `/timezone <city>`      | Uhrzeit in beliebiger Stadt (für internationale Server)      |
| `/stopwatch`            | Startet einen Timer (z. B. für Games, Moderation, Fokuszeit) |

---

## 📋 **2. Server-Tools & Organisation**

| Command                    | Nutzen                                                       |
|----------------------------|--------------------------------------------------------------|
| `/poll <frage> <optionen>` | Schnell einfache Umfragen mit Emoji-Reaktionen               |
| `/suggest <text>`          | Vorschlagssystem – User reichen Ideen ein, Bot speichert sie |
| `/todo add/view/remove`    | Einfache persönliche oder serverweite To-Do-Liste            |
| `/note <text>`             | Speichert eine Notiz, `/notes` zeigt alle                    |

---

## 🧪 **3. Entwickler- und Techniktools**

| Command                 | Nutzen                                  |
|-------------------------|-----------------------------------------|
| `/jsonformat <input>`   | Formatiert JSON schön (für Devs & Logs) |
| `/base64 encode/decode` | Codiert/decodiert Text                  |
| `/uuid`                 | Generiert eine UUID v4                  |
| `/pingurl <url>`        | Zeigt Antwortzeit + HTTP-Code einer URL |
| `/headers <url>`        | Zeigt HTTP-Header einer Website an      |

---

## 🎮 **4. Gaming & Fun (aber nützlich!)**

| Command             | Nutzen                                                             |
|---------------------|--------------------------------------------------------------------|
| `/steaminfo <user>` | Holt Steam-Spielzeit & zuletzt gespielte Titel (via OpenSteam API) |
| `/mcstatus <ip>`    | Minecraft-Serverstatus (Spieler, Ping)                             |
| `/valorank <user>`  | Zeigt aktuellen Valorant-Rang (wenn verlinkt)                      |
| `/roll <NdM>`       | Klassischer Würfel (z. B. /roll 2d6) für TTRPG oder Minigames      |

---

## 🧰 **5. Kategorie: Utility**

| Slash-Command      | Beschreibung                                              | Beispiel                              |
|--------------------|-----------------------------------------------------------|---------------------------------------|
| `/avatar <user>`   | Zeigt das (große) Profilbild eines Users                  | Zeigt auch animierte Avatare          |
| `/userinfo <user>` | Zeigt Infos über einen User (ID, Beitritt, Rollen)        | Praktisch für Support oder Moderation |
| `/serverinfo`      | Zeigt Serverdetails (Owner, Mitgliederzahl, Boosts etc.)  | Übersicht über den Server             |
| `/roleinfo <role>` | Zeigt Infos zu einer bestimmten Rolle                     | z. B. wer hat sie, ist sie mentionbar |
| `/ping`            | Misst Latenz zwischen Bot und Discord + API Response Time | Für Debug oder Statusprüfung          |
| `/invite`          | Gibt dir den Bot-Invite-Link (falls öffentlich)           | Nützlich für andere                   |
| `/uptime`          | Zeigt, wie lange der Bot schon läuft                      | Für Tech-Status                       |
| `/botinfo`         | Version, Name, Anzahl Server, Speicherverbrauch etc.      | Technische Infos                      |
