import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS } from "../constant/orderConstant";

const orderReducer = (state={},action)=>{
    switch(action.type){
        case CREATE_ORDER_REQUEST:
        
        case CREATE_ORDER_FAIL:

        case CREATE_ORDER_SUCCESS:
        
        default: return state 
    }
}

export default orderReducer;