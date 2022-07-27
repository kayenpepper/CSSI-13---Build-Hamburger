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
// total selector
const answerHolder = document.querySelector("#total");
// add prices for checkout
checkoutButton.addEventListener("click", (e) => {
  // add all the toppings under order
// nesting format like calling css
let total = 0;
  const ingredients = document.querySelectorAll(".order .topping");
  ingredients.forEach((ingredient) => {
    total += Number(ingredient.dataset.price);
  });
  answerHolder.innerHTML = `The total cost of your burger is $${total}`;
})



const navButtons = document.querySelectorAll("#nav .topping");
const orderDiv = document.querySelector(".order");
navButtons.forEach((navButton) => {
  navButton.addEventListener("click", () => {
    orderDiv.innerHTML += `<div class="topping ${navButton.dataset.ingredient}" data-ingredient="${navButton.dataset.ingredient}" data-price="${navButton.dataset.price}">${navButton.dataset.ingredient}</div>`;
  });
});
