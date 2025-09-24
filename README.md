# 🤖 Botza V0.1

**Botza** es un chatbot para Discord que imita a Mamorsa, pero mejor porque no es Mamorsa.  
Nació como un proyecto de broma, pero si quieres contribuir o jugar con él, aquí está.

---

## ¿Qué hace Botza?

Por ahora, Botza:
- Responde **solo cuando lo mencionas** (`@Botza`).  
- Tiene una **personalidad configurable**: puede sonar serio, casual, sarcástico o como quieras.  
- Usa la API de **OpenAI** para generar las respuestas.  

---

## Requisitos

Para correr Botza en tu máquina necesitas:

- [Node.js](https://nodejs.org) (v18 o superior).  
- Una **app de Discord** y un **bot token** (desde el [Developer Portal](https://discord.com/developers/applications)).  
- Una **API key de OpenAI** (desde [platform.openai.com](https://platform.openai.com/)).  

⚠️ **Importante:**  
Cada desarrollador debe usar **sus propias claves** (Discord y OpenAI).  
No compartimos tokens en este repo porque no quiero pagar.

---

## 📦 Instalación

Clona el repo y entra en la carpeta:

```bash
git clone https://github.com/tu-usuario/botza.git
cd botza
```

Instala las dependencias:

```bash
npm install
```


Crea un archivo `.env` en la raíz del proyecto con tus tokens:
```env
DISCORD_TOKEN=tu_token_de_discord
OPENAI_API_KEY=tu_api_key_de_openai
```

---

## Uso

Inicia el bot desde la consola:

```bash
node index.js
```
---

# Mamorsa masón
**Project created by Maldxe**
