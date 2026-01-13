import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    list: [
      { id: 1, name: 'Headphones', price: 99, image: '/Headphones.webp' },
      { id: 2, name: 'Phone Case', price: 25, image: '/phone-case.jpeg' },
      { id: 3, name: 'USB Cable', price: 15, image: '/usb-cable.jpg' }
    ]
  },
  reducers: {}
});

export default productSlice.reducer;
