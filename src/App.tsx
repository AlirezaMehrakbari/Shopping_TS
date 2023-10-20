import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./page/Home.tsx";
import Store from "./page/Store.tsx";
import About from "./page/About.tsx";
import Navbar from "./components/Navbar.tsx";
import {Container} from "react-bootstrap";
import {ShoppingContextProvider} from "./context/ShoppingCartContext.tsx";

function App() {

    return (
        <>
            <ShoppingContextProvider>
            <Navbar/>
                <Container>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/store' element={<Store/>}/>
                        <Route path='/about' element={<About/>}/>
                    </Routes>
                </Container>
            </ShoppingContextProvider>
        </>
    )
}

export default App
