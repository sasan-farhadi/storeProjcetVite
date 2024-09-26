import { FaListUl } from 'react-icons/fa'
import { createQueryObject } from '../helpers/helper'

const SideBar = ({setQuery}) => {
    const categoryHandler = (e) => {
        const { tagName } = e.target
        const category = e.target.innerText.toLowerCase()

        if (tagName !== "LI") return
        setQuery(query => createQueryObject(query, { category }))
    }

    return (
        <div>
            <div>
                <FaListUl />
                <p>Categories</p>
            </div>
            <ul onClick={categoryHandler}>
                <li>All</li>
                <li>Electronice</li>
                <li>Jewelery</li>
                <li>Men's Clothing</li>
                <li>Women's Clothing</li>
            </ul>
        </div>
    )
}

export default SideBar
