import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const mockProducts = [
  {
    id: "prod1",
    name: "Compact Tractor Oil (5L)",
    seller: "FieldPro Supplies",
    price: 38.0,
    currency: "Rs.",
    stockStatus: "Ships in 2–3 days",
    image: "https://via.placeholder.com/100/A3E635/000000?text=Oil",
    quantity: 1,
  },
  {
    id: "prod2",
    name: "Organic NPK Fertilizer (25kg)",
    seller: "GreenHarvest",
    price: 24.0,
    currency: "Rs.",
    stockStatus: "In stock",
    image: "https://via.placeholder.com/100/10B981/000000?text=Fertilizer",
    quantity: 1,
  },
];


export const loadCart = createAsyncThunk(
  "cart/loadCart",
  async (_, thunkAPI) => {
    try {
      return mockProducts;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to load cart");
    }
  }
);


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        item => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        item => item.id !== action.payload
      );
    },

    updateQuantity: (state, action) => {
      const { productId, change } = action.payload;
      const item = state.items.find(i => i.id === productId);

      if (item) {
        item.quantity = Math.max(1, item.quantity + change);
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(loadCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
