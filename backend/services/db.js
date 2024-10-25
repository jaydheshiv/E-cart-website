const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/foodapp", () => {
  console.log("mongodb connection successful!!");
});

// models
// to store product details
const Product = mongoose.model("Product", {
  id: Number,
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  rating: {
    rate: Number,
    count: Number,
  },
});

// to store user details
const User = mongoose.model("User", {
  username: String,
  email: String,
  password: String,
  checkout: [],
  cart: [],
  wishlist: [],
  orders: [
    {
      products: Array,
      total: Number,
      date: Date,
    },
  ],
});

module.exports = {
  Product,
  User,
};
