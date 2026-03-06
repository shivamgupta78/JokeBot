const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv');
const axios = require('axios');
dotenv.config();

const token = process.env.TELEGRAM_KEY;
const bot = new TelegramBot(token, { polling: true });

// bot.on('message', (msg) => {
//     console.log(msg);
//     bot.sendMessage(msg.chat.id, 'hello world');

// });

bot.onText(/\/joke/, async (msg) => {
    const joke = await axios.get('https://official-joke-api.appspot.com/random_joke');
    const jokeText = `"${joke.data.setup}", ",": "${joke.data.punchline}"`;
    bot.sendMessage(msg.chat.id, jokeText);
});