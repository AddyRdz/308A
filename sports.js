import { API_KEY } from "./apiKey.js";

// // sports news div element.
const getSportsNewsLink = document.getElementById("getSportsNewsLink");
const newsDisplay = document.getElementById("newsDisplay");

// button refreshes when clicked
getSportsNewsLink.addEventListener("click", getSportsNews);

async function getSportsNews() {
  const res = await fetch("https://newsapi.org/v2/everything?q=sports", {
    headers: { "x-api-key": API_KEY },
  });

  const data = await res.json();
  console.log(data);

  newsDisplay.innerHTML = "";

  data.articles.forEach((article) => {
    const sportsStory = document.createElement("div");
    sportsStory.innerHTML = `<div id = topNews><h1>${article.title}</h1></div>
    <img src=${article.urlToImage}>
    <a href=${article.url}>Read More</a>`;
    newsDisplay.appendChild(sportsStory);
  });
}