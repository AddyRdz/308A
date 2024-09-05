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
    story.innerHTML = `<div class="card" style="width: 18rem;">
 <div class="card" style="width: 18rem;">
  <img src="${article.urlToImage}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="${article.title}">${article.title}</h5>
    <p class="card-text">${article.description}</p>
    <a href="${article.url}" class="btn btn-primary">Read More</a>
  </div>
</div>
    <div id = topNews><h1>${article.title}</h1></div>
    <img src=${article.urlToImage}>
    <a href=${article.url}>Read More</a>`
    newsDisplay.appendChild(story);
  });
}
