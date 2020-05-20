let newsList =[]

const apiKey = "964264cf2b5742118275fdb4607af4cf"

//async go with await
const loadNews = async() =>{
    let url= `https://newsapi.org/v2/everything?q=vietnam&apiKey=${apiKey}`
    let data = await fetch(url)
    let result = await data.json();
    console.log("What is result ",result)
    newsList = result.articles
    render(newsList)
}

const render = (list) =>{
 console.log("The list are", list)
 let newsHTML = list.map( item => `
    <div id="news" style="display:flex; justify-content: center; align-items: center; border:1px solid black; margin: 10px">
    <div id="contents-area">
     <div id ="title">${item.title}</div>
     <div id ="source">${item.source.name}</div>
     <div id ="date">${item.publishedAt}</div>
    </div>
    <div id="image-area">
     <img style="width:300px; height:300px; object-fit: scale-down; float-left" src ="${item.urlToImage}">
    </div>
    </div>
`
 ).join("")

//  document.getElementById("news-area").innerHTML = newsHTML
}




loadNews()