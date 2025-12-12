import TelegramBot from "node-telegram-bot-api";
import { getPrediction } from "./predictionLogic.js";

const BOT_TOKEN = "YOUR_TELEGRAM_BOT_TOKEN";
if (BOT_TOKEN) {
  const bot = new TelegramBot(BOT_TOKEN, { polling: true });

  bot.onText(/\/predict/, async (msg) => {
    const chatId = msg.chat.id;
    const pred = await getPrediction();
    bot.sendMessage(chatId, "Prediction: " + pred);
  });

  console.log("Telegram bot started!");
}
