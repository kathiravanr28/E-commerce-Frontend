// src/store/productSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Import images from assets
import Headphones from "../assets/Headphones.webp";
import PhoneCase from "../assets/phone-case.jpeg";
import USBCable from "../assets/usb-cable.jpg";

const initialState = {
  items: [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "High quality over-ear Bluetooth headphones.",
      price: 99.99,
      image: Headphones, // ✅ imported
    },
    {
      id: 2,
      name: "Phone Case",
      description: "Durable case for phones.",
      price: 19.99,
      image: PhoneCase,
    },
    {
      id: 3,
      name: "USB-C Cable",
      description: "Fast charging cable.",
      price: 14.99,
      image: USBCable,
    },
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
