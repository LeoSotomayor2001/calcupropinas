import { useState } from "react"
import { OrderItem, menuItem } from "../types"

export default function useOrder() {
    
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

  const addItem = (item : menuItem) => {
      // Verificar si el elemento ya existe en la lista de pedidos
      const itemExists = order.find((orderItem) => orderItem.id === item.id);
      if(itemExists) {
          // Si el elemento existe, incrementar la cantidad del elemento en la lista de pedidos
          const updatedOrder=order.map(orderItem => orderItem.id === item.id ? 
          {...orderItem, quantity: orderItem.quantity + 1} : 
          orderItem)
  
          setOrder(updatedOrder)
      }
      else{
          // Si el elemento no existe, agregar un nuevo elemento con cantidad 1 a la lista de pedidos
          const newItem: OrderItem = {...item, quantity: 1}
          setOrder([...order,newItem])
      }
    }
    // Esta función removeItem toma un id como argumento y elimina el elemento con ese id del array order.
    // Utiliza el método filter en el array order para crear un nuevo array que excluye el elemento con el id dado.
    // Luego llama a la función setOrder con este nuevo array para actualizar el estado de la variable order.
    const removeItem = (id: menuItem['id']) => {
        setOrder(order.filter(item => item.id !== id));
    }


     //Resetea el estado de la orden y la propina a sus valores iniciales.
    const placeOrder = () => {
        // Resetea el estado de la orden a un array vacío
        setOrder([])
        // Resetea el estado de la propina a cero
        setTip(0)
    }


    return {
        order,
        removeItem,
        addItem,
        tip,
        setTip,
        placeOrder
    }
}