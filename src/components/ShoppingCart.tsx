import {Offcanvas, Stack} from "react-bootstrap";
import {useShoppingCart} from "../context/ShoppingCartContext.tsx";
import CartItem from "./CartItem.tsx";
import {StoreItems} from "../data/Items.tsx";
type ShoppingCart ={
    isOpen : boolean
}
const ShoppingCart = ({isOpen}:ShoppingCart) => {
    const {cartItems,closeCart} = useShoppingCart()
  return (
   <Offcanvas show={isOpen} onHide={closeCart}>
       <Offcanvas.Header closeButton>Your Cart</Offcanvas.Header>
       <Offcanvas.Body>
           <Stack gap={3}>
       {cartItems.map((item)=>{
           return <CartItem key={item.id} {...item}/>
       })}
           </Stack>
           <div className='mt-4 fs-5 fw-bold'>
               {`Total Price : $${
                   cartItems.reduce((total,cartItems)=>{
                       const item = StoreItems.find(item=>item.id === cartItems.id)
                       return total + (item?.price || 0) * cartItems.quantity
                   },0)
               }`}
           </div>
       </Offcanvas.Body>
   </Offcanvas>
  )
}

export default ShoppingCart
