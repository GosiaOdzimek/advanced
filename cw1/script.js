const data = [
    {
        title : "Pink lake",
        src: "1.webp",
    },
    {
        title : "Single iseland",
        src: "2.webp",
    },
    {
        title : "Forest lake",
        src: "3.webp",
    },
]

function changeHTMLInfo( slideNr ){
    const title = data[slideNr].title
    const titleDOM = document.querySelector("h2")
    titleDOM.innerHTML = title
    const image = data[ slideNr].src
    const imageDOM = document.querySelector("img")
    imageDOM.src = "img/"+image
}
changeHTMLInfo(1)

let currSlide = 1;
changeHTMLInfo(currSlide)

const leftArr = document.querySelector(".leftArr")
leftArr.onclick = function(){
    changeSlide( "left")
}
function changeSlide( direction ){
if( direction == "left"){
    currSlide--
}else{
    currSlide++
}

if(currSlide < 0){
    currSlide = 2 
}
changeHTMLInfo(currSlide)
}
changeSlide(currSlide)

document.querySelector(".rightArr").onclick = function(){
    changeSlide( "right" )
changeSlide( "right" )
}
function changeSlide( direction ){
    if( direction == "left" ){
        currSlide--
    }else{
        currSlide++
    }
    if( currSlide < 0){
        currSlide = 2
    }
    if( currSlide > 2 ){
        currSlide = 0
    }
    changeHTMLInfo(currSlide)
}