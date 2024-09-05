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
  newsDisplay.className = "row";

  data.articles.forEach((article) => {
    const sportsStory = document.createElement("div");
    sportsStory.className = "col-md-3 mb-4"
    sportsStory.innerHTML = `<div class="card" style="width: 18rem;">
 <div class="card" style="width;">
  <img src="${article.urlToImage}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="${article.title}">${article.title}</h5>
    <a href="${article.url}" class="btn btn-primary">Read More</a>
  </div>
</div>`
    newsDisplay.appendChild(sportsStory);
  });
}