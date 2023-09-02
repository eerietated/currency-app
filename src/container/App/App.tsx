import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Cart from '../../pages/Cart/Cart'
import Header from '../Header/Header'
import { useState } from 'react'

type Props = {}

const App = (props: Props) => {
    const [total, setTotal] = useState(0)
    const addTotal = (price: number) => {
        setTotal(prevState => prevState + price)
    }
    return (
        <>
            <Header></Header>
            <Container>
                <Routes>
                    <Route path="/" element={<Home addTotal={addTotal} total={total} />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </Container>
        </>
    )
}
export default App
