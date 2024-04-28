import { OrderActions } from "../reducers/order-reducer";
import { menuItem } from "../types"
import { Dispatch } from 'react';

type menuItemProps = {
    item: menuItem,
    dispatch:Dispatch<OrderActions>
}
export default function MenuItems({ item, dispatch } : menuItemProps) {
  return (
    <button
      className="border-teal-400 border-2 p-3 hover:bg-teal-300 rounded w-full flex justify-between"
      onClick={() => dispatch({type:"ADD_ITEM",payload:{item:item}})}
      
    >

        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
    </button>
  )
}
