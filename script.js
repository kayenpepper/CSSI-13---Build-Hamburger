// get all the elements with the class topping
const toppings = document.querySelectorAll(".topping");

// connects javascript to html elements
toppings.forEach((topping) => {
  topping.addEventListener("click", (e) => {
    console.log(topping.dataset);
  });
});

// not querySelectorAll because there is only one checkout button
const checkoutButton = document.querySelector(".button");
let total = 0;
// total selector
const answerHolder = document.querySelector("#total");
// add prices for checkout
checkoutButton.addEventListener("click", (e) => {
  ingredients.forEach((ingredient) => {
    total += Number(ingredient.dataset.price);
  });
  answerHolder.innerHTML = `The total cost of your burger is $${total}`;
})

// add all the toppings under order
// nesting format like calling css
const ingredients = document.querySelectorAll(".order .topping");