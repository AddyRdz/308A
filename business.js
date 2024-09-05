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
  newsDisplay.className = "row";

  data.articles.forEach((article) => {
    const businessStory = document.createElement("div");
    businessStory.className = "col-md-3 mb-4";
    businessStory.innerHTML = `<div class="card" style="width: 18rem;">
 <div class="card" style="width;">
  <img src="${article.urlToImage}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="${article.title}">${article.title}</h5>
    <a href="${article.url}" class="btn btn-primary">Read More</a>
  </div>
</div>`;
    newsDisplay.appendChild(businessStory);
  });
}
