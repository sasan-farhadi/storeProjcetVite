import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Card from '../components/Card'
import Loader from "../components/Loader"
import { useProducts } from '../context/ProductContext'
import styles from './ProductsPage.module.css'

import { filterProducts, getInitialQuery, searchProducts } from '../helpers/helper'
import SearchBox from '../components/SearchBox'
import SideBar from '../components/SideBar'

const ProductsPage = () => {
    const products = useProducts()
    const [displyed, setDisplayed] = useState([])
    const [search, setSearch] = useState("")
    const [query, setQuery] = useState({})

    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        setDisplayed(products)
        setQuery(getInitialQuery(searchParams))
    }, [products])


    useEffect(() => {
        setSearchParams(query)
        setSearch(query.search || "")
        let finalProducts = searchProducts(products, query.search)
        finalProducts = filterProducts(finalProducts, query.category)

        setDisplayed(finalProducts)
    }, [query])

    return (
        <>
            <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
            <div className={styles.container}>
                <div className={styles.products}>
                    {!displyed.length && <Loader />}
                    {displyed.map(p => (<Card key={p.id} data={p} />))}
                </div>
                <SideBar setQuery={setQuery} />
            </div>
        </>
    )
}

export default ProductsPage
