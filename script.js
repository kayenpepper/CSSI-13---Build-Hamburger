// get all the elements with the class topping
const toppings = document.querySelectorAll(".topping");

// connects javascript to html elements
toppings.forEach((topping) => {
  topping.addEventListener("click", (e) => {
    console.log(topping.dataset);
  });
});

// // not querySelectorAll because there is only one checkout button
// const checkoutButton = document.querySelector(".button");