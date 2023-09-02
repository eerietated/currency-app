import { useState } from 'react'
import ProductList from '../../components/Product/ProductList'
import { ButtonGroup, Button, Dropdown } from 'react-bootstrap'

type Props = {
    addTotal: (price: number) => void
    total: number
}

const Home = ({ addTotal, total }: Props) => {
    const [currency, setCurrency] = useState('USD')
    const [conversionRate, setConversionRate] = useState(1)

    const changeCurrency = (newCurrency: string) => {
        let rate = 1
        switch (newCurrency) {
            case 'EUR':
                rate = 0.93
                break
            case 'GBP':
                rate = 0.79
                break
            case 'UAH':
                rate = 37.1
                break
        }
        setCurrency(newCurrency)
        setConversionRate(rate)
    }

    const convertTotal = total * conversionRate

    return (
        <div className="home-page">
            <Dropdown>
                <div className="converter">
                    <div className="total">
                        <h3>
                            TOTAL: <span>{convertTotal.toFixed(2)}</span>{' '}
                            {currency}
                        </h3>
                    </div>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Convert
                    </Dropdown.Toggle>
                </div>
                <Dropdown.Menu>
                    <Dropdown.Item>
                        <Button
                            variant="primary"
                            onClick={() => changeCurrency('USD')}
                        >
                            USD
                        </Button>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Button
                            variant="primary"
                            onClick={() => changeCurrency('EUR')}
                        >
                            EUR
                        </Button>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Button
                            variant="primary"
                            onClick={() => changeCurrency('GBP')}
                        >
                            GBP
                        </Button>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Button
                            variant="primary"
                            onClick={() => changeCurrency('UAH')}
                        >
                            UAH
                        </Button>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <ProductList
                addTotal={addTotal}
                currency={currency}
                conversionRate={conversionRate}
            />
        </div>
    )
}
export default Home
