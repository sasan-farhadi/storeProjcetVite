import { useState } from 'react'
import Card from '../components/Card'
import Loader from "../components/Loader"
import { useProducts } from '../context/ProductContext'
import styles from './ProductsPage.module.css'

import { ImSearch } from 'react-icons/im'
const ProductsPage = () => {
    const products = useProducts()
    const [search, setSearch] = useState("")

    const searchHandler = () => {
        console.log("first")
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
                <div>SideBar</div>
            </div>
        </>
    )
}

export default ProductsPage
