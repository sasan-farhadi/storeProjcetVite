import { FaListUl } from 'react-icons/fa'
import { createQueryObject } from '../helpers/helper'
import styles from './SideBar.module.css'
import { categories } from '../constant/list'

const SideBar = ({ setQuery, query }) => {
    const categoryHandler = (e) => {
        const { tagName } = e.target
        const category = e.target.innerText.toLowerCase()

        if (tagName !== "LI") return
        setQuery(query => createQueryObject(query, { category }))
    }

    return (
        <div className={styles.sidebar}>
            <div>
                <FaListUl />
                <p>Categories</p>
            </div>
            <ul onClick={categoryHandler}>
                {
                    categories.map(item => (
                        <li key={item.id} className={item.type.toLowerCase() == query.category ? styles.selected : null}>{item.type}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SideBar
