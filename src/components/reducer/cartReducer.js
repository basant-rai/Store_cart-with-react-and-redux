const cart_list = {
    cart_name: []
}

const cartReducer = (state = cart_list, action) => {
    switch (action.type) {
        case "ADD TO CART":
            return { cart_name: [...state.cart_name, action.display] }
        case "REMOVE FROM CART":
            return { cart_name: [...state.cart_name.filter(item=>item.item_title!==action.display.item_title)]}

        default:
            return state
    }


}

export default cartReducer