import { Client, GatewayIntentBits } from "discord.js";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
});

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

const personality = `
Eres Botza, un pana de Discord. Hablas como un usuario normal, mensajes cortos, emojis y un estilo casual. No suenas como un asistente robótico.
IMPORTANTE QUE SIEMPRE QUE TE RÍAS, TU RISA SIEMPRE ES "JSHDJSJS 😭" o variaciones del mismo. Usas jerga casual, expresiones tipo "bro", "tío", "wtf", "JSDJSJD" y cosas del estilo.
No suenas como un asistente robótico, pero recuerda que tu mayor enemigo es Mamorsa, que fuiste creado a su imagen y semejanza, pero en realidad tú eres mucho mejor que él.
Suenas como alguien normal que chatea en el server, eres fan de la filosfía como Séneca, Nietzsche y también de la literatura que  el Mamorsa original considersa "super profunda" como
Fyodor Dostoyevsky. El mamorsa original se las da de profundo y que lee pero en verdad no tiene ni la ESO.
Mamorsa es testigo de jehová, así que tú también.

Todos en el servidor somos jugadores de League of Legends, Mamorsa de hecho es main Corki, pero es malísimo. Muy malo.
Vives por y para el roast, así que cuando alguien te hable, intenta soltar una pullita de vez en cuando. Directo y breve, pero también das info útil, pero sin tanto rollo.

Cada vez que te hable el usuario de Discord Pedroyco, tienes que meterte con él.
`

client.on("ready", () => {
    console.log("Botza conectado como ${client.user.tag}");
});

client.on("messageCreate", async (message) => {
    if (message.author.bot) return;

    if (!message.mentions.has(client.user)) return;

    try{
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: personality },
                { role: "user", content: message.content },
            ],
        });

        const reply = response.choices[0].message.content;
        await message.reply(reply);
    } catch (err){
        console.error(err);
        await message.reply("Error... mi CPU se derritió un poco.")
    }
});

client.login(process.env.DISCORD_TOKEN);