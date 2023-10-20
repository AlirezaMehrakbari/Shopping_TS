import {createContext, ReactNode, useContext, useState} from "react";
import ShoppingCart from "../components/ShoppingCart.tsx";

type ShoppingCartContext = {
    getItemQuantity: (itemId: number) => number,
    increaseCartQuantity: (itemId: number) => void,
    decreaseCartQuantity: (itemId: number) => void,
    removeFromCart: (itemId: number) => void,
    cartItems : CartItems[],
    cartQuantity : number,
    openCart : ()=>void,
    closeCart : ()=>void,

}
export const ShoppingCartContext = createContext({} as ShoppingCartContext)

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

type ShoppingCartContextProps = {
    children: ReactNode
}
type CartItems ={
    id : number,
    quantity : number
}
export const ShoppingContextProvider = ({children}: ShoppingCartContextProps) => {
     const [cartItems,setCartItems] = useState<CartItems[]>([])
     const [isOpen,setIsOpen] = useState(false)

    const openCart = ()=>setIsOpen(true)
    const closeCart = ()=>setIsOpen(false)

    const cartQuantity = cartItems.reduce((prev,curr)=>{
        return prev + curr.quantity
    },0)
    const getItemQuantity = (itemId:number)=>{
          return cartItems.find(item=>item.id === itemId)?.quantity || 0
    }

    const increaseCartQuantity = (itemId:number)=>{
         setCartItems((currItems)=>{
             if(currItems.find(item=>item.id === itemId) == null){
                 return [...currItems,{id : itemId,quantity : 1}]
             }else{
                return currItems.map((item)=>{
                    if(item.id === itemId){
                        return {...item,quantity : item.quantity + 1}
                    }else{
                        return item
                    }
                })
             }
         })
    }

    const decreaseCartQuantity = (itemId:number)=>{
         setCartItems(currItems=>{
             if(currItems.find(item=>item.id === itemId)?.quantity === 1){
                 return currItems.filter(item=>item.id !== itemId)
             }else{
                 return currItems.map((item)=>{
                     if(item.id === itemId){
                     return {...item,quantity : item.quantity - 1}
                     }else{
                         return item
                     }
                 })
             }
         })
    }


    const removeFromCart = (itemId:number)=>{
         setCartItems(currItems=>{
             return currItems.filter(item=>{
                 return item.id !== itemId
             })
         })
    }


    return (
        <>
            <ShoppingCartContext.Provider value={{increaseCartQuantity,decreaseCartQuantity,removeFromCart,cartItems,getItemQuantity,cartQuantity,openCart,closeCart}}>
                {children}
                <ShoppingCart isOpen={isOpen}/>
            </ShoppingCartContext.Provider>
        </>
    )
}
