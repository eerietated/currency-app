export type Product = {
    id: number
    image: string
    title: string
    description: string
    format: string
    author: string
    price: number
}

const productsArray:Product[] = [
    {
        id: 1,
        image: '/images/DanceWithDragons.jpg',
        title: 'A Dance with Dragons: A Song of Ice and Fire: Book Five',
        description: 'In the aftermath of a colossal battle, the future of the Seven Kingdoms hangs in the balance--beset by newly emerging threats from every direction.',
        format: 'Mass Market Paperbound',
        author: 'George R. R. Martin',
        price: 9.99,
    },
    {
        id: 2,
        image: '/images/DanceWithDragons.jpg',
        title: 'A Dance with Dragons: A Song of Ice and Fire: Book Five',
        description: 'In the aftermath of a colossal battle, the future of the Seven Kingdoms hangs in the balance--beset by newly emerging threats from every direction.',
        format: 'Paperback',
        author: 'George R. R. Martin',
        price: 18.49,
    },
    {
        id: 3,
        image: '/images/DanceWithDragons.jpg',
        title: 'A Dance with Dragons: A Song of Ice and Fire: Book Five',
        description: 'In the aftermath of a colossal battle, the future of the Seven Kingdoms hangs in the balance--beset by newly emerging threats from every direction.',
        format: 'Hardcover',
        author: 'George R. R. Martin',
        price: 35.69,
    },
    {
        id:4,
        image: '/images/FeastForCrows.webp',
        title: 'A Feast for Crows: A Song of Ice and Fire: Book Four',
        description: 'It seems too good to be true. After centuries of bitter strife and fatal treachery, the seven powers dividing the land have decimated one another into an uneasy truce.',
        format: 'Mass Market Paperbound',
        author: 'George R. R. Martin',
        price: 9.29,
    },
    {
        id: 5,
        image: '/images/FeastForCrows.webp',
        title: 'A Feast for Crows: A Song of Ice and Fire: Book Four',
        description: 'It seems too good to be true. After centuries of bitter strife and fatal treachery, the seven powers dividing the land have decimated one another into an uneasy truce.',        format: 'Paperback',
        author: 'George R. R. Martin',
        price: 19.99,
    },
    {
        id: 6,
        image: '/images/FeastForCrows.webp',
        title: 'A Feast for Crows: A Song of Ice and Fire: Book Four',
        description: 'It seems too good to be true. After centuries of bitter strife and fatal treachery, the seven powers dividing the land have decimated one another into an uneasy truce.',        format: 'Hardcover',
        author: 'George R. R. Martin',
        price: 33.48,
    },
    {
        id: 7,
        image: '/images/StormOfSwords.jpg',
        title: 'A Storm of Swords',
        description: 'Of the five contenders for power, one is dead, another in disfavor, and still the wars rage as violently as ever, as alliances are made and broken.',        format: 'Mass Market Paperbound',
        author: 'George R. R. Martin',
        price: 5.49,
    },
    {
        id: 8,
        image: '/images/StormOfSwords.jpg',
        title: 'A Storm of Swords',
        description: 'Of the five contenders for power, one is dead, another in disfavor, and still the wars rage as violently as ever, as alliances are made and broken.',        format: 'Paperback',
        author: 'George R. R. Martin',
        price: 13.72,
    },
    {
        id: 9,
        image: '/images/StormOfSwords.jpg',
        title: 'A Storm of Swords',
        description: 'Of the five contenders for power, one is dead, another in disfavor, and still the wars rage as violently as ever, as alliances are made and broken.',
        format: 'Hardcover',
        author: 'George R. R. Martin',
        price: 27.62,
    },
]

export const getProductsObject = (array:Product[]) => array.reduce((object,product) => ({
    ...object,
    [product.id]: product
}), {})

export default productsArray