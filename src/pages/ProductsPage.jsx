import { useState } from 'react'
import Card from '../components/Card'
import Loader from "../components/Loader"
import { useProducts } from '../context/ProductContext'
import styles from './ProductsPage.module.css'

import { ImSearch } from 'react-icons/im'
import { FaListUl } from 'react-icons/fa'
const ProductsPage = () => {
    const products = useProducts()
    const [search, setSearch] = useState("")

    const searchHandler = () => {
        console.log("first")
    }

    const categoryHandler = (e) => {
        const { tagName } = e.target
        const category = event.target.innerText.toLowerCase()
        if (tagName !== "LI") return
        console.log(category)
    }
    return (
        <>
            <div>
                <input type="text"
                    placeholder='Search ...'
                    value={search}
                    onChange={e => setSearch(e.target.value.toLowerCase().trimStart())} />
                <button onClick={searchHandler}><ImSearch /></button>
            </div>
            <div className={styles.container}>
                <div className={styles.products}>
                    {!products.length && <Loader />}
                    {products.map(p => (<Card key={p.id} data={p} />))}
                </div>
                <div>
                    <div>
                        <FaListUl />
                        <p></p>
                    </div>
                    <ul onClick={categoryHandler}>
                        <li>All</li>
                        <li>Electronice</li>
                        <li>Jewelery</li>
                        <li>Men's Clothing</li>
                        <li>Women's Clothing</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ProductsPage
