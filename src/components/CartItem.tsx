import {StoreItems} from "../data/Items.tsx";
import {Button} from "react-bootstrap";
import {useShoppingCart} from "../context/ShoppingCartContext.tsx";

type CartItemProps = {
    id : number,
    quantity : number
}
const CartItem = ({id,quantity} :CartItemProps) => {
     const {removeFromCart} = useShoppingCart()
    const item = StoreItems.find(item=>item.id === id)
    if(item == null) return null
  return (
    <div className='d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
            <img style={{width:'60px',height:'60px',objectFit:'cover'}} src={item.image}/>
            <div className='ms-2' style={{fontSize:'12px'}}>
                {item.name}
                <div className='text-muted'>$ {item.price}</div>
            </div>
        </div>
        <div className='d-flex gap-2' >
            <div className='d-flex bg-primary text-white rounded p-1 justify-content-center align-items-center' style={{fontSize:'12px'}} >
                 $ {item.price * quantity}
            </div>
                <Button onClick={()=>removeFromCart(id)} variant='outline-danger' size='sm'>&times;</Button>
        </div>
    </div>
  )
}

export default CartItem
