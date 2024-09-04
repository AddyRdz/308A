import { API_KEY } from "./apiKey.js";


document.addEventListener("DOMContentLoaded", getNews);

async function getNews() {
  const res = await fetch("https://newsapi.org/v2/top-headlines?country=us", {
    headers: { "x-api-key": API_KEY },
  });

  const data = await res.json();
  console.log(data);
}
