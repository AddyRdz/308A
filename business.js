import { API_KEY } from "./apiKey.js";

// // business news div element.
const getBusinessNews = document.getElementById("getBusinessNews");
const getTopNews = document.getElementById("getTopNews");
// get business news button
const getBusinessNewsButton = document.getElementById("getBusinessNewsButton");

// button refreshes when clicked
getBusinessNewsButton.addEventListener("click", getTopBusinessNews);

async function getTopBusinessNews() {
  getTopNews.innerHTML = "";
  const res = await fetch("https://newsapi.org/v2/everything?q=business", {
    headers: { "x-api-key": API_KEY },
  });

  const data = await res.json();
  console.log(data);

  getBusinessNews.innerHTML = "";

  data.articles.forEach((article) => {
    const businessStory = document.createElement("div");
    businessStory.innerHTML = `<div id = topNews><h1>${article.title}</h1></div>
    <img src=${article.urlToImage}>
    <a href=${article.url}>Read More</a>`;
    getBusinessNews.appendChild(businessStory);
  });
}
