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
let articles = 10

const apiKey = "964264cf2b5742118275fdb4607af4cf"


//async go with await
const loadTechNews = async() =>{
    let url= `https://newsapi.org/v2/top-headlines?country=us&category=science&pageSize=${articles}&apiKey=${apiKey}`
    let data = await fetch(url)
    let techresult = await data.json();
    console.log("What is techresult ",techresult)
    newsTechList = techresult.articles
    render(newsTechList, "news-tech-area")
    document.getElementById('news-label').innerHTML = "Science and Technology Column"
    let newsTechListNumber = newsTechList.length
    console.log("What is new tech number,", newsTechListNumber)
    document.getElementById('tech-article-number').innerHTML = newsTechListNumber
}

//async go with await
const loadSportNews = async() =>{
    let url= `https://newsapi.org/v2/top-headlines?country=us&category=sports&pageSize=${articles}&apiKey=${apiKey}`
    let data = await fetch(url)
    let sportresult = await data.json();
    console.log("What is sportresult",sportresult)
    newsSportList = sportresult.articles
    render(newsSportList, "news-sport-area")
    document.getElementById('news-label').innerHTML = "Sports Column"
    let newsSportListNumber = newsSportList.length
    console.log("What is new sport number,", newsSportListNumber)
    document.getElementById('sport-article-number').innerHTML = newsSportListNumber
}

const loadNewSources = () =>{
    loadTechNews()
    loadSportNews()
}


const render = (list,id) =>{
 let newsHTML = list.map( item => 
  `<label id="news-label"></label>
   <!-- Featured news -->
   <div class="single-news mb-4" style="height:620px; width:500px;">
     <!-- Image -->
     <div class="view overlay rounded mb-4">
       <a href="${item.url}"><img class="img-responsive text-center" style="height:300px; width:500px; object-fit: cover;" src="${item.urlToImage}" alt="${item.title}"></a>
       <a>
         <div class="mask rgba-white-slight"></div>
       </a>
     </div>
     <!-- Data -->
     <div class="news-data d-flex justify-content-space-between">
       <p class="font-weight-bold dark-grey-text"><i style="color:blue" class="fas fa-clock fa-2X"></i>${moment(item.publishedAt).format('dddd, MMM Do yyyy')}</p>
     </div>
     <!-- Excerpt -->
     <h3 class="font-weight-bold dark-grey-text mb-3"><a>${item.title}</a></h3>
     <p class="dark-grey-text">${item.description}</p>
     <a href="${item.url}" class="btn btn-primary">Read more</a>
   </div>
   <!-- Featured news -->
 </div>
 <!-- Grid column -->
`
 ).join("")

document.getElementById(id).innerHTML = newsHTML
}

loadNewSources()

const loadMoreNewSources = () =>{
  articles+=10
  loadTechNews()
  loadSportNews()
}


