import { createContext, useContext, useReducer } from "react"
import { sumProducts } from "../helpers/helper"

const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selectedItems.find(item => item.id == action.payload.id)) {
                state.selectedItems.push({ ...action.payload, quantity: 1 })
            }
            return {
                ...state,
                ...sumProducts(state.selectedItems),
                checkout: false,
            }

        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                selectedItems: [...newSelectedItems],
                ...sumProducts(newSelectedItems)
            }

        case "INCREASE":
            const increaseIndex = state.selectedItems.findIndex(item => item.id == action.payload.id)
            state.selectedItems[increaseIndex].quantity++
            return {
                ...state,
                ...sumProducts(state.selectedItems)
            }

        case "DECREASE":
            const decreaseIndex = state.selectedItems.findIndex(item => item.id == action.payload.id)
            state.selectedItems[decreaseIndex].quantity--
            return {
                ...state,
                ...sumProducts(state.selectedItems)
            }

        case "CHECKOUT":
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: true
            }
        default:
            throw new Error("invalid action")
    }
}

const CartContext = createContext()
const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>
        </div>
    )
}

const useCart = () => {
    const { state, dispatch } = useContext(CartContext)
    return [state, dispatch]
}

export default CartProvider
export { useCart }
