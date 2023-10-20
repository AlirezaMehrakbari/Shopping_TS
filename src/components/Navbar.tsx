import {Button, Container, Nav, Navbar as NavbarBS} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {useShoppingCart} from "../context/ShoppingCartContext.tsx";

const Navbar = () => {
    const {cartQuantity,openCart} = useShoppingCart()
    return (
        <NavbarBS className='bg-white mb-4 shadow-sm'>
            <Container>
                <Nav>
                    <Nav.Link to={'/'} as={NavLink}>Home</Nav.Link>
                    <Nav.Link to={'/store'} as={NavLink}>Store</Nav.Link>
                    <Nav.Link to={'/about'} as={NavLink}>About</Nav.Link>
                </Nav>
                {cartQuantity > 0 &&
                    <div className='position-relative'>
                        <Button onClick={openCart} variant='outline-warning' className='text-primary'><AiOutlineShoppingCart/></Button>
                        <div
                            className='position-absolute bg-primary text-white d-flex justify-content-center align-items-center rounded-circle'
                            style={{top: '0', right: '0', fontSize: '0.8rem', width: '15px', height: '15px', transform: 'translate(40%,-20%)'}}>{cartQuantity}</div>
                    </div>
                }

            </Container>
        </NavbarBS>
    )
}

export default Navbar
