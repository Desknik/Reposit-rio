var config = document.querySelector('.config');
var configBox = document.querySelector('.configbox');
var input = document.querySelectorAll('.input');
var root = document.querySelector(':root')

config.addEventListener("click", () =>{
    configBox.classList.toggle("visible")
})

for (var i = 0; i < input.length; i++) {
    input[i].addEventListener("click", ChangeColor)
}


function ChangeColor(e) {
    var active = document.querySelector('.active');
    if(!e.target.classList.contains("active")){
        active.classList.remove("active")
        e.target.classList.add("active")
    }
    console.log(e.target.id)
}