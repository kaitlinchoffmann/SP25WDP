let foodButton = document.getElementById("foodItems")
foodButton.addEventListener('click', getFoodItems)

let listItems = document.getElementById("listItems")

function getFoodItems() {
  fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(i => {
      listItems.innerHTML += 
      `
        <h2 class="foodItem">Item Name: ${i.name}. Price: ${i.price}</h2>
      `
    })
  })
} 