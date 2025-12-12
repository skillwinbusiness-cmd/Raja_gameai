import express from "express";
import { getPrediction } from "./predictionLogic.js";
import "./telegramBot.js"; // start bot

const app = express();

let currentPrediction = "Loading...";

// Refresh prediction every 30 sec
setInterval(async () => {
  currentPrediction = await getPrediction();
}, 30000);

app.get("/prediction", (req, res) => {
  res.json({ prediction: currentPrediction });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
