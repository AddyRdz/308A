import { API_KEY } from "./apiKey.js";

// the all top news div element.
const newsDisplay = document.getElementById("newsDisplay");
// get top us news button
const topNewsLink = document.getElementById("topNewsLink");
// button refreshes when clicked
topNewsLink.addEventListener("click", getNews);

document.addEventListener("DOMContentLoaded", getNews);

async function getNews() {
  const res = await fetch("https://newsapi.org/v2/top-headlines?country=us", {
    headers: { "x-api-key": API_KEY },
  });

  const data = await res.json();
  console.log(data);
  newsDisplay.innerHTML = "";

  data.articles.forEach((article) => {
    const story = document.createElement("div");
    story.innerHTML = `<div id = topNews><h1>${article.title}</h1></div>
    <img src=${article.urlToImage}>
    <a href=${article.url}>Read More</a>`;
    newsDisplay.appendChild(story);
  });
}
