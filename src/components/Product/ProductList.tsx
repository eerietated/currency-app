import productsArray from '../../utils/productsArray'
import ProductListItem from './ProductListItem'
import { CardGroup } from 'react-bootstrap'

type Props = {
    addTotal: (price: number) => void
    currency: string
    conversionRate: number
}

const ProductList = ({ addTotal, currency, conversionRate }: Props) => {
    return (
        <div className="product-list">
            <CardGroup>
                {productsArray.map(
                    ({
                        id,
                        image,
                        title,
                        description,
                        format,
                        author,
                        price,
                    }) => (
                        <ProductListItem
                            id={id}
                            image={image}
                            title={title}
                            description={description}
                            format={format}
                            author={author}
                            price={price}
                            addTotal={addTotal}
                            currency={currency}
                            conversionRate={conversionRate}
                        />
                    )
                )}
            </CardGroup>
        </div>
    )
}
export default ProductList
