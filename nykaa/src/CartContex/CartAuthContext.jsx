import { createContext, useState } from "react"

export const CartContext=createContext()

function CartAuthContext({children}){
    const [state,dispatch]=useState([]);
    
   return(
    <CartContext.Provider value={{state,dispatch}}>
        {children}
    </CartContext.Provider>
   ) 
}
export default CartAuthContext;