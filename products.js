/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "b1",
    title: "BLB Bun",
    description: "Buttery and crispy",
    price: 250,
    discontinued: true,
    categories: ["b"]
  },

  {
    id: "b2",
    title: "BLB Coconut Bun",
    description: "BLB with coconut",
    price: 270,
    discontinued: false,
    categories: ["b"]
  },

  {
    id: "b3",
    title: "BLB Red Bean Bun",
    description: "BLB with red bean",
    price: 275,
    discontinued: false,
    categories: ["b"]
  },

  {
    id: "b4",
    title: "BLB Custard Bun",
    description: "Buttery and creamy custard bun",
    price: 285,
    discontinued: false,
    categories: ["b"]
  },

  {
    id: "b5",
    title: "Hot Dog Bun",
    description: "Meat Lover Hot Dog Bun",
    price: 310,
    discontinued: false,
    categories: ["b"]
  },

  {
    id: "c11",
    title: "Tiramisu",
    description: "Mascarpone cheese with whipping cream",
    price: 850,
    discontinued: true,
    categories: ["c1"]
  },

  {
    id: "c12",
    title: "Chocolate crepe cake",
    description: "Sweet chocolate crepe cake with vanilla ice cream",
    price: 970,
    discontinued: false,
    categories: ["c1"]
  },

  {
    id: "c13",
    title: "Brownie",
    description: "Brown sugar brownie with chocolate chip",
    price: 580,
    discontinued: false,
    categories: ["c1"]
  },

  {
    id: "c14",
    title: "Banana pound Cake",
    description: "delicate texture",
    price: 650,
    discontinued: false,
    categories: ["c1"]
  },

  {
    id: "c21",
    title: "All Butter Croissant",
    description: "Buttery and crispy",
    price: 250,
    discontinued: false,
    categories: ["c2"]
  },

  {
    id: "c22",
    title: "Chocolate Croissant",
    description: "dark chocolate flavor",
    price: 280,
    discontinued: false,
    categories: ["c2"]
  },

  {
    id: "c23",
    title: "Sea Salt Croissant",
    description: "salty croissant with butter",
    price: 250,
    discontinued: false,
    categories: ["c2"]
  },

  {
    id: "c24",
    title: "Brown Sugar Croissant",
    description: "Brown Sugar icing on the top",
    price: 250,
    discontinued: true,
    categories: ["c2"]
  },

  {
    id: "c31",
    title: "Signature Cookies",
    description: "All butter cookies",
    price: 150,
    discontinued: false,
    categories: ["c3"]
  },

  {
    id: "c32",
    title: "Chocolate Cookies",
    description: "Buttery and chocolaty",
    price: 250,
    discontinued: false,
    categories: ["c3"]
  },

  {
    id: "c33",
    title: "Coffee Cookies",
    description: "Coffee flavor makes it more special",
    price: 250,
    discontinued: false,
    categories: ["c3"]
  },

  {
    id: "c34",
    title: "Vanilla Cookies",
    description: "Swiss Vanilla flavor",
    price: 250,
    discontinued: true,
    categories: ["c3"]
  },

  {
    id: "d1",
    title: "Milk Tea",
    description: "milk tea with cream and milk",
    price: 350,
    discontinued: false,
    categories: ["d"]
  },

  {
    id: "d2",
    title: "Roasted Coffee",
    description: "Roasted coffee with cream and milk",
    price: 350,
    discontinued: false,
    categories: ["d"]
  },

  {
    id: "d3",
    title: "Honey Lemon Tea",
    description: "Lemon Tea with honey and black tea",
    price: 450,
    discontinued: false,
    categories: ["d"]
  },

  {
    id: "d4",
    title: "Ginger Lemon Tea",
    description: "Ginger sugar with lemon and black tea",
    price: 450,
    discontinued: false,
    categories: ["d"]
  }
];
