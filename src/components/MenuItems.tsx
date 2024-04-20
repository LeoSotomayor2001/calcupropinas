import { menuItem } from "../types"

type menuItemProps = {
    item: menuItem,
    addItem: (item: menuItem) => void
}
export default function MenuItems({ item, addItem } : menuItemProps) {
  return (
    <button
      className="border-teal-400 border-2 p-3 hover:bg-teal-300 rounded w-full flex justify-between"
      onClick={() => addItem(item)}
      
    >

        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
    </button>
  )
}
