import { formatCurrency } from "../helpers"
import { OrderItem, menuItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[],
    removeItem: (id:menuItem['id']) => void
}

export default function OrderContents({order, removeItem}:OrderContentsProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>
      <div className="mt-10 space-y-3">
            
                
                {order.map((item) => (
                    <div 
                        className="flex justify-between border-b border-slate-300 p-2 items-center" 
                        key={item.id}
                    >   
                        <div>
                            <p className="text-lg">
                                {item.name} - {formatCurrency( item.price)} 
                            </p>
                            <p className="font-black">
                                Cantidad: {item.quantity} -  {formatCurrency(item.price * item.quantity)}
                            </p>

                        </div>

                        <button 
                            className="w-8 h-8 bg-red-600 rounded-full text-white"
                            onClick={()=>removeItem(item.id)}
                        >
                            X
                        </button>
                    </div>
                ))}
      </div>
    </div>
  )
}
