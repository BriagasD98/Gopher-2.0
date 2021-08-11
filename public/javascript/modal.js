//MODAL STUFF


//Gopher it modal
var modalBtn = document.querySelector("#modalBtn");
var modalBg = document.querySelector("#modalBG");
var modalClose = document.querySelector("#modalClose");

modalBtn.addEventListener("click",function(){
    modalBg.classList.add("bg-active");
});

modalClose.addEventListener("click",function(){
    modalBg.classList.remove("bg-active");
});


//connect modal
var connectBtn = document.querySelector("#connectBtn");
var connectBg = document.querySelector("#connectModalBG")
var connectClose = document.querySelector("#connectClose");

connectBtn.addEventListener("click",function(){
    console.log("clicked");
    connectBg.classList.add("bg-active");
});

connectClose.addEventListener("click",function(){
    connectBg.classList.remove("bg-active");
});