import { Dispatch , SetStateAction} from "react"
import { OrderActions } from "../reducers/order-reducer"
const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]
  type TipPercentageFormProps = {
    dispatch: React.Dispatch<OrderActions>
    tip:number

  }
export default function TipPercentageForm({dispatch,tip}:TipPercentageFormProps) {
  return (
    <div>
        <h3 className="text-2xl font-black">Propina</h3>

        <form>  
            {tipOptions.map((tipOptions) => (
                <div className="flex items-center gap-2" key={tipOptions.id}>
                    <label htmlFor={tipOptions.id}>{tipOptions.label}</label>
                    <input 
                        type="radio" 
                        name="tip" 
                        id={tipOptions.id} 
                        value={tipOptions.value} 
                        onChange={(e) =>dispatch({type:"ADD_TIP", payload:{ value:+e.target.value } } ) }
                        checked={tipOptions.value === tip}
                    />
                </div>
            ))}
            
        </form>
    </div>
  )
}
