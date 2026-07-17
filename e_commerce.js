const inventory = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 29.99,
    stock: 45,
    sales: 120,
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Apparel",
    price: 89.99,
    stock: 5,
    sales: 85,
  },
  {
    id: 3,
    name: "Coffee Mug",
    category: "Kitchen",
    price: 12.49,
    stock: 150,
    sales: 340,
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 119.99,
    stock: 8,
    sales: 90,
  },
  {
    id: 5,
    name: "Yoga Mat",
    category: "Fitness",
    price: 34.99,
    stock: 0,
    sales: 210,
  },
  {
    id: 6,
    name: "Chef's Knife",
    category: "Kitchen",
    price: 79.99,
    stock: 12,
    sales: 45,
  },
  {
    id: 7,
    name: "Water Bottle",
    category: "Fitness",
    price: 19.99,
    stock: 80,
    sales: 500,
  },
];

let items = inventory;
let threshold = 5;
let topProduct = inventory[0];

function calculateTotalValue(items) {
let value = 0;
  for (let i = 0; i < items.length; i++) {
    value += items[i].price * items[i].stock;
  }
  console.log("Total Value Cost: ", value);
}
function getLowStockAlerts(items, threshold) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].stock <= threshold) {
      console.log("These are the product that has low stock: ", items[i].name);
    }
  }
}

  let discounted = 0;
function categoryDiscount(items, categoryName, discounted){
  for (let i = 0; i < items.length; i++){
    if (items[i].category === categoryName){
    //  items[i].price = items[i].price * (1 = discount / 100)
    items[i].price -= items[i].price * (discounted / 100)
    }
  }

}

function findStarProduct(items, topProduct) {
  for (let i = 0; i < items.length; i++){
    if (inventory[i].sales > topProduct.sales){
      topProduct = inventory[i];
    }
  }
      console.log("Our star product is", topProduct.name,"with: ", topProduct.sales, "units sold!")
}
calculateTotalValue(items);
getLowStockAlerts(items, threshold);
findStarProduct(items, topProduct);
categoryDiscount(items, "Electronics", 10);
console.log(inventory)

