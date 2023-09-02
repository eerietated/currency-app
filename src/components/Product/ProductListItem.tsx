import { useState } from 'react'
import { Card, Button } from 'react-bootstrap'

type Props = {
    id: number
    image: string
    title: string
    description: string
    format: string
    author: string
    price: number
    addTotal: (price: number) => void
    currency: string
    conversionRate: number
}

const ProductListItem = ({
    id,
    image,
    title,
    description,
    format,
    author,
    price,
    addTotal,
    currency,
    conversionRate,
}: Props) => {
    const [purchased, setPurchased] = useState(false)

    const buyLimit = () => {
        if (!purchased) {
            addTotal(price)
            setPurchased(true)
        }
    }

    const convertPrice = price * conversionRate

    return (
        <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>{format}</Card.Text>
                <Card.Text>{author}</Card.Text>
                <Card.Text>{convertPrice.toFixed(2)} {currency}</Card.Text>
                <Button variant="dark" onClick={buyLimit} disabled={purchased}>
                    {purchased ? 'Purchased' : 'Buy'}
                </Button>
            </Card.Body>
        </Card>
    )
}
export default ProductListItem
