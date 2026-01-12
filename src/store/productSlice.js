import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    list: [
      { id: 1, name: 'Headphones', price: 99, image: '/headphones.jpg' },
      { id: 2, name: 'Phone Case', price: 25, image: '/case.jpg' },
      { id: 3, name: 'USB Cable', price: 15, image: '/cable.jpg' }
    ]
  },
  reducers: {}
});

export default productSlice.reducer;
