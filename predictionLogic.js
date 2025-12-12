export async function getPrediction() {
  // Example logic – change as needed
  const rnd = Math.floor(Math.random() * 10);
  return rnd % 2 === 0 ? "EVEN" : "ODD";
}
