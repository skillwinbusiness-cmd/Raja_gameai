async function fetchPrediction() {
  const res = await fetch("/prediction");
  const data = await res.json();
  document.getElementById("prediction-box").textContent = data.prediction;
}

setInterval(fetchPrediction, 5000);
fetchPrediction();
