let inputBox = document.getElementById("display-text");
let display = document.getElementById("display");

inputBox.addEventListener("keypress" , function(e){
    display.innerText = "You Have Pressed Key " + e.key
});
