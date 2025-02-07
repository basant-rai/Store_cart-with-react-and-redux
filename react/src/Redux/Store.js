import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import cartReducer from "./Reducer/cartreducer";

const rootreducer = combineReducers({
    cart:cartReducer,
})

let initial_state = {
    cart:{
        cart_items: localStorage.getItem('cart_items') ? JSON.parse(localStorage.getItem('cart_items')):[],
        shipping_info: localStorage.getItem('shipping_info') ? JSON.parse(localStorage.getItem('shipping_info')):[],
    }
}

const middleware = [thunk]
const store = createStore(rootreducer,initial_state,composeWithDevTools(applyMiddleware(...middleware)))

export default store