// const url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=e2a4981af1b24d9eb79ab2f2c218a4a9`;


let btn=document.getElementById("addBtn")
btn.addEventListener("click",async()=>{
    const url =`https://newsapi.org/v2/everything?q=${addTxt.value}&apiKey=e2a4981af1b24d9eb79ab2f2c218a4a9`;
addTxt.value="";
    const response =await fetch(url);
const data = await response.json();
console.log(data);
for(var i = 0 ; i <data.articles.length;i++){
    const newUrl =data.articles[i].urlToImage;
    const loadUrl = (newUrl == null)?"https://c.ndtvimg.com/2023-02/kahdadpg_earth_625x300_25_February_23.jpg":newUrl;
    document.getElementById("news").innerHTML+=`
    <div class="card my-3 mx-3" style="width: 18rem;">
    <img src="${loadUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data.articles[i].author}</h5>
      <p class="card-text">${data.articles[i].content}</p>
      <a href="${data.articles[i].url}" target="_blank" class="btn btn-dark">Read More</a>
    </div>
  </div>
    `
}

    


// showNews(data);
});

// function showNews(data){

// news.ineerHtml=`
// <div class="card" style="width: 18rem;">
// <img src="${}" class="card-img-top" alt="...">
// <div class="card-body">
//   <h5 class="card-title">Card title</h5>
//   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   <button href="#" class="btn btn-primary">Go somewhere</button>
// </div>
// </div>
// `


// }

// const getNews = async()=>{
// const response =await fetch(url);
// const data = await response.json();
// console.log(data);
// }