import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import { OrderActions } from "../reducers/order-reducer"

type OrderTotalsProps = {
    order: OrderItem[],
    tip:number,
    dispatch: React.Dispatch<OrderActions>

}
export default function OrderTotals({order, tip, dispatch}:OrderTotalsProps) {

    // Calcula el subtotal multiplicando el precio de cada item y su cantidad
    const subTotalAmount = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0),
        [order] // se vuelve a calcular solo si cambia el orden
    )

    // Calcula el monto de la propina multiplicando el subtotal por el porcentaje dado
    const tipAmount = useMemo(() => subTotalAmount * tip, [order, tip] // se vuelve a calcular solo si cambia el orden o el porcentaje
    )

    // Calcula el monto total sumando el subtotal y la propina
    const totalAmount = useMemo(() => subTotalAmount + tipAmount, [tip, order] // se vuelve a calcular solo si cambia el orden o el porcentaje
    )

  return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y Propina</h2>
            <p>Subtotal a pagar: {' '}
                <span className="font-bold">{formatCurrency(subTotalAmount)}</span>

            </p>

            <p>Propina: {' '}
                <span className="font-bold">{formatCurrency(tipAmount)}</span>

            </p>
            <p>Total: {' '}
                <span className="font-bold">{formatCurrency(totalAmount)}</span>

            </p>
        </div>

        <button 
            className="w-full bg-teal-400  text-white font-bold py-2 px-4 rounded 
            disabled:opacity-10"
            disabled={order.length === 0}
            onClick={() => dispatch({type:"PLACE_ORDER"})}
        >
            Guardar Orden
        </button>
    </>
  )
}
