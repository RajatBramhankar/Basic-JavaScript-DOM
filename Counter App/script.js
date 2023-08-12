// getting the html elements
const decrement = document.getElementById("decrement-btn");
const increment = document.getElementById("increment-btn");
const reset = document.getElementById("reset-btn");
const displayValue = document.getElementById("display-value");


// for decrement button click
    decrement.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if (value > 0){
    displayValue.innerText = value - 1;
    } 
    else {
    alert("Negative value not allowed");
}
});


// for increment button click
    increment.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if (value >= 100){
    alert("100+ values are not allowed");
    } 
    else {
    displayValue.innerText = value + 1;
    }
    });

  // for reset button click
    reset.addEventListener("click", () => {
    displayValue.innerText = 0;
    });