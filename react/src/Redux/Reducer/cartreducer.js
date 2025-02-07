import { ADD_ITEM_TO_CART, CLEAR_CART, REMOVE_FROM_CART, SAVE_SHIPPING_INFO } from "../constant/cartConstant"

const initial_data = {
    cart_items: [],
    shipping_info: {}
}

const cartReducer = (state = initial_data, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            let item = action.payload
            const itemExists = state.cart_items.find(search_item => search_item.product === item.product)
            if (itemExists) {
                return {
                    ...state,
                    cart_items: [...state.cart_items.map(current_item =>
                        current_item.product === item.product ? item : current_item)]
                }
            } else {
                return {
                    ...state,
                    cart_items: [...state.cart_items, item]
                }
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cart_items: [...state.cart_items.filter(item => item.product != action.payload.product)]
            }

        case CLEAR_CART:
            return {
                cart_items: [...state]
            }
        case SAVE_SHIPPING_INFO:
            return { ...state, shipping_info: action.payload }

        default:
            return state
    }

}

export default cartReducer;