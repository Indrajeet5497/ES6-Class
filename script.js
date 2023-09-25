var istatus = document.querySelector("h3")

var addFriend = document.querySelector("#add")
var removeFriend = document.querySelector("#remove")

addFriend.addEventListener("click",function(){
    istatus.innerHTML = "Ruchi 28th Sep"
    istatus.style.color = "green"
})

removeFriend.addEventListener("click",function(){
    istatus.innerHTML = "Happy Birthday"
    istatus.style.color = "red"
})