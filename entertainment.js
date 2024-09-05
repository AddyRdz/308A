import { API_KEY } from "./apiKey.js";

// the all entertainment news div element.
const getEntertainmentNewsLink = document.getElementById("getEntertainmentNewsLink");
// get top us news button
const newsDisplay = document.getElementById("newsDisplay");
// button refreshes when clicked
getEntertainmentNewsLink.addEventListener("click", getEntertainmentNews);


async function getEntertainmentNews() {
  const res = await fetch("https://newsapi.org/v2/everything?q=entertainment", {
    headers: { "x-api-key": API_KEY },
  });

  const data = await res.json();
  console.log(data);
  newsDisplay.innerHTML = "";
  newsDisplay.className = "row";

  data.articles.forEach((article) => {
    const entertainmentStory = document.createElement("div");
    entertainmentStory.className = "col-md-3 mb-4"
    entertainmentStory.innerHTML = `<div class="card" style="width: 18rem;">
 <div class="card" style="width;">
  <img src="${article.urlToImage}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="${article.title}">${article.title}</h5>
    <a href="${article.url}" class="btn btn-primary">Read More</a>
  </div>
</div>`
    newsDisplay.appendChild(entertainmentStory);
  });
}