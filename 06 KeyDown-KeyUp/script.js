let conatiner = document.getElementById("container");
let display = document.getElementById("display");

// add event listener for keyDown
document.addEventListener("keydown", function(e){
    display.style.color = "green";
    display.style.fontWeight = "700"
    display.innerText = e.key + " is Key Down";
});

// add event listener for keyUp
document.addEventListener("keyup", function (e) {
    display.style.color = "red";
    display.style.fontWeight = "700"
    display.innerText = e.key + " is Key Up";
});