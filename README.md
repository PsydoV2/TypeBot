## 🧠 **Grundidee: TypeBot – dein vielseitiger API-Assistent auf Discord**

> 💡 *Ein Bot, der APIs anzapft und auf Kommando sofort nützliche Informationen, Tools oder sogar Automatisierungen liefert.*

---

## 🔧 Fokusbereiche für TypeBot

| Bereich                 | Ideen für Features                                      | API-Beispiele                          |
| ----------------------- | ------------------------------------------------------- | -------------------------------------- |
| 📡 **Live-Infos**       | Wetter, Übersetzungen, Währungen, News, TV-Programm     | OpenWeather, NewsAPI, CoinGecko, DeepL |
| 🛠️ **Dev Tools**       | UUID-Generator, JSON Formatter, Ping-Test, Uptime-Check | selbst bauen oder öffentliche Dev-APIs |
| 🎲 **Unterhaltung**     | Trivia, Witze, Zitate, GIFs, Prompts                    | OpenAI, Giphy, JokeAPI                 |
| 📦 **Produktivität**    | Erinnerungen, To-Do, Notizen (pro User)                 | lokal speichern oder Notion/Google API |
| 🌐 **Websuche & Infos** | Wikipedia, Stack Overflow, Google (Snippets)            | Wikipedia API, Stack Exchange API      |
| 🎮 **Gaming**           | Spielerprofil-Stats, Release-Kalender, Preisvergleich   | RAWG.io, Steam API, IGDB               |

---

## 🔑 Konkrete Slash-Commands (Beispiele)

| Befehl                              | Beschreibung                             |
| ----------------------------------- | ---------------------------------------- |
| `/weather berlin`                   | Zeigt aktuelles Wetter (via OpenWeather) |
| `/translate de en Hallo Welt`       | Übersetzt Text mit DeepL                 |
| `/uuid`                             | Generiert eine UUID                      |
| `/joke`                             | Holt dir einen zufälligen Witz           |
| `/news`                             | Zeigt die Top-Nachrichten des Tages      |
| `/crypto btc`                       | Aktueller Bitcoin-Kurs (CoinGecko)       |
| `/gif cat`                          | Zeigt ein lustiges GIF von Giphy         |
| `/wiki linux`                       | Gibt dir die Wikipedia-Zusammenfassung   |
| `/todo add "Discord Command bauen"` | Persönliches ToDo anlegen                |
| `/uptime google.com`                | Prüft, ob eine Webseite erreichbar ist   |

---

## 🧱 Strukturvorschlag nach Funktion

```
src/
├── commands/
│   ├── system/         → uuid.ts, uptime.ts
│   ├── fun/            → joke.ts, gif.ts, trivia.ts
│   ├── info/           → weather.ts, crypto.ts, news.ts
│   ├── tools/          → translate.ts, wiki.ts
│   └── productivity/   → todo.ts, reminder.ts
├── apis/               → helpers für API-Aufrufe
│   └── weatherApi.ts
│   └── deeplApi.ts
├── utils/              → logger.ts, fetcher.ts
├── config.ts
└── main.ts
```

---

## 💡 Besondere Ideen für später

* 🧠 GPT-Integration: `/summarize`, `/rewrite`, `/prompt`
* 🧾 PDF- oder Link-Zusammenfassungen
* 🔐 API-Schlüsselverwaltung pro User (`/auth set mykey`)
* 📊 Dashboard mit REST-API + Webclient (z. B. mit Next.js)
