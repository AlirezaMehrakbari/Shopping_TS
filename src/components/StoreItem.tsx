import {Button, Card} from "react-bootstrap";
import {useShoppingCart} from "../context/ShoppingCartContext.tsx";

type StoreItemProps = {
    id: number,
    name: string,
    image: string,
    price: number,
}

const StoreItem = ({id, name, image, price}: StoreItemProps) => {
    const {getItemQuantity,increaseCartQuantity,decreaseCartQuantity}= useShoppingCart()
    const quantity = getItemQuantity(id)
    return (
        <Card className='h-100'>
            <Card.Img className='mx-auto' style={{width: '200px'}} src={image}/>
            <Card.Body className='d-flex flex-column justify-content-between'>
                <Card.Title>
                    <div className='d-flex justify-content-between mt-2 mb-2 align-items-baseline'>
                        <div style={{fontSize: '0.9rem'}}>{name}</div>
                        <div style={{fontSize: '0.7rem'}}
                             className='h-100 p-2 rounded bg-primary text-white'>${price}</div>
                    </div>
                </Card.Title>

                {quantity === 0 ?
                    <Button variant='outline-primary' className='w-50 mx-auto ' size='sm' onClick={()=>increaseCartQuantity(id)}>Add To Cart</Button>
                    :
                    <div className='d-flex justify-content-center align-items-center gap-2'>
                        <Button variant='outline-danger' size='sm' onClick={()=>decreaseCartQuantity(id)}>-</Button>
                        {quantity}
                        <Button variant='outline-success' size='sm' onClick={()=>increaseCartQuantity(id)}>+</Button>
                    </div>
                }

            </Card.Body>

        </Card>
    )
}

export default StoreItem
