import { OrderItem, menuItem } from "../types";

export type OrderActions=
    {type:"ADD_ITEM",payload:{item:menuItem}}|
    {type:"REMOVE_ITEM",payload:{id:menuItem['id']}}|
    {type: "PLACE_ORDER"}|
    {type:"ADD_TIP",payload:{value:number}}

export type OrderState={
    order:OrderItem[],
    tip:number
}

export const initialState:OrderState = {
    order: [],
    tip: 0
}

export const orderReducer = (state:OrderState=initialState, action:OrderActions) => {
    
    if(action.type === "ADD_ITEM"){ 
            
        // Verificar si el elemento ya existe en la lista de pedidos
        const itemExists = state.order.find((orderItem) => orderItem.id === action.payload.item.id);
        let updatedOrder:OrderItem[] = [];
        if(itemExists) {
            // Si el elemento existe, incrementar la cantidad del elemento en la lista de pedidos
            updatedOrder=state.order.map(orderItem => orderItem.id === action.payload.item.id ? 
            {...orderItem, quantity: orderItem.quantity + 1} : 
            orderItem)
    
        }
        else{
            // Si el elemento no existe, agregar un nuevo elemento con cantidad 1 a la lista de pedidos
            const newItem: OrderItem = {...action.payload.item, quantity: 1}
            updatedOrder=[...state.order,newItem]
        }
        
        return{
            ...state,
            order:updatedOrder
        }
    
    }
    
    if(action.type === "REMOVE_ITEM"){ 

        return{
            ...state,
            order:state.order.filter(item => item.id !== action.payload.id),
        }
    
    }
    
    if(action.type === "PLACE_ORDER"){ 
        
        return{
            ...state,
            order:[],
            tip:0
        }
    
    }
    
    if(action.type === "ADD_TIP"){ 
        const tip=action.payload.value
        return{
            ...state,
            tip
        }
    
    }

    return state;
}