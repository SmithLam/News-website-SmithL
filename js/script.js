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
console.log(moment().format("ddddd, mm, yyyy"))

//async go with await
const loadTechNews = async() =>{
    let url= `https://newsapi.org/v2/top-headlines?country=us&category=science&pageSize=5&apiKey=${apiKey}`
    let data = await fetch(url)
    let result = await data.json();
    console.log("What is result ",result)
    newsTechList = result.articles
    render(newsTechList, "news-tech-area")
    // document.getElementById('label-tech-area').innerHTML = "Science and Technology Column"
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
 let newsHTML = list.map( item => 
  `
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

