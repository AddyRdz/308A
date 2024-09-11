import { API_KEY } from "./apiKey.js";

// the all entertainment news div element.
const getTechnologyNewsLink = document.getElementById("getTechnologyNewsLink");
// get top us news button
const newsDisplay = document.getElementById("newsDisplay");
// button refreshes when clicked
getTechnologyNewsLink.addEventListener("click", getTechnologyNews);


async function getTechnologyNews() {
  const res = await fetch("https://newsapi.org/v2/everything?q=technology", {
    headers: { "x-api-key": API_KEY },
  });

  const data = await res.json();
  console.log(data);
  newsDisplay.innerHTML = "";
  newsDisplay.className = "row";

  data.articles.forEach((article) => {
    const technologyStory = document.createElement("div");
    technologyStory.className = "col-md-3 mb-4"
    technologyStory.innerHTML = `<div class="card" style="width: 18rem;">
 <div class="card" style="width;">
  <img src="${article.urlToImage}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="${article.title}">${article.title}</h5>
    <a href="${article.url}" class="btn btn-primary">Read More</a>
  </div>
</div>`
    newsDisplay.appendChild(technologyStory);
  });
}