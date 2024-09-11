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
  newsDisplay.className = "row";

  data.articles.forEach((article) => {
    const story = document.createElement("div");
    story.className = "col-md-3 mb-4"
    story.innerHTML = `<div class="card" style="width: 18rem;">
 <div class="card custom-card" style="width;">
  <img src="${article.urlToImage}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="${article.title}">${article.title}</h5>
    <a href="${article.url}" class="btn btn-primary custom-button">Read More</a>
  </div>
</div>`
    newsDisplay.appendChild(story);
  });
}
