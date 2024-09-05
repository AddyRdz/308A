import { API_KEY } from "./apiKey.js";

// // business news div element.
const getBusinessNewsLink = document.getElementById("getBusinessNewsLink");
const newsDisplay = document.getElementById("newsDisplay");

// button refreshes when clicked
getBusinessNewsLink.addEventListener("click", getTopBusinessNews);

async function getTopBusinessNews() {
  const res = await fetch("https://newsapi.org/v2/everything?q=business", {
    headers: { "x-api-key": API_KEY },
  });

  const data = await res.json();
  console.log(data);

  newsDisplay.innerHTML = "";

  data.articles.forEach((article) => {
    const businessStory = document.createElement("div");
    businessStory.innerHTML = `<div id = topNews><h1>${article.title}</h1></div>
    <img src=${article.urlToImage}>
    <a href=${article.url}>Read More</a>`;
    newsDisplay.appendChild(businessStory);
  });
}
