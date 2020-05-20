///header-section
$(document).ready(function() {
  $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
  });
});
// Scrolling Effect
$(window).on("scroll", function() {
  if($(window).scrollTop()) {
        $('nav').addClass('black');
  }
  else {
        $('nav').removeClass('black');
  }
})


///news-section
let newsTechList =[]
let newSportList = []

const apiKey = "964264cf2b5742118275fdb4607af4cf"

//async go with await
const loadTechNews = async() =>{
    let url= `https://newsapi.org/v2/top-headlines?country=us&category=science&pageSize=5&apiKey=${apiKey}`
    let data = await fetch(url)
    let result = await data.json();
    console.log("What is result ",result)
    newsTechList = result.articles
    render(newsTechList, "news-area")
}

//async go with await
const loadSportNews = async() =>{
    let url= `https://newsapi.org/v2/top-headlines?country=us&category=sports&pageSize=5&apiKey=${apiKey}`
    let data = await fetch(url)
    let result = await data.json();
    console.log("What is result",result)
    newsSportList = result.articles
    render(newsSportList, "news-sport-area")
}

const loadNewSources = () =>{
    loadTechNews()
    loadSportNews()
}


const render = (list,id) =>{
 let newsHTML = list.map( item => `
   <!-- Featured news -->
   <card>
   <div class="single-news mb-4" style="height:600px; width:500px">
     <!-- Image -->
     <div class="view overlay rounded mb-4">
       <img class="img-responsive text-center" style="height:300px; width:500px; object-fit: cover;" src="${item.urlToImage}" alt="${item.title}">
       <a>
         <div class="mask rgba-white-slight"></div>
       </a>
     </div>
     <!-- Data -->
     <div class="news-data d-flex justify-content-space-between">
       <p class="font-weight-bold dark-grey-text"><i class="fas fa-clock-o pr-2"></i>${item.publishedAt}</p>
     </div>
     <!-- Excerpt -->
     <h3 class="font-weight-bold dark-grey-text mb-3"><a>${item.title}</a></h3>
     <p class="dark-grey-text">${item.description}</p>
   </div>
   <!-- Featured news -->
 </div>
 </card>
 <!-- Grid column -->
`
 ).join("")

document.getElementById(id).innerHTML = newsHTML
}



loadNewSources()

