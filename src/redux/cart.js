import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk("cart/fetchUser", async (id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return response.data; // Assuming you want to return the data from the response
});

const INITIAL_STATE = {
    cartList: [],
    cartCount: 0,
    userDetail: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_STATE,
    reducers: {
        updateUser: (state, action) => {
            state.userDetail.push(action.payload);
        },
        addToCart: (state, action) => {
            const itemExist = state.cartList.find((item) => item?.id === action.payload.id);
            if (itemExist) {
                state.cartList.forEach((item) => {
                    if (item?.id === action.payload.id) {
                        item.count = 1;
                    }
                });
                return;
            }
            state.cartList.push({ ...action.payload, count: 1 });

        },
        Increment: (state, action) => {
            const proId = action.payload;
            state.cartList.forEach((item) => {
                if (item?.id === proId) {
                    item.count++;
                }
            })
        },
        Decrement: (state, action) => {
            const proId = action.payload;
            state.cartList.forEach((item) => {
                item?.id === proId && item.count--;
            })
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state, action) => {
                console.log("action start");
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                console.log("action end");
                state.userDetail.push(action.payload);
            })
            .addCase(fetchUser.rejected, (state, action) => {
                console.error("fetchUser request failed:", action.error);
            });
    },

});

export const { addToCart, Increment, Decrement, updateUser } = cartSlice.actions;
export default cartSlice.reducer;
