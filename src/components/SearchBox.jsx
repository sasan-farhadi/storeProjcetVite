import { ImSearch } from 'react-icons/im'
import { createQueryObject } from '../helpers/helper'
import styles from './SearchBox.module.css'


const SearchBox = ({ search, setSearch, setQuery }) => {
    const searchHandler = () => {
        setQuery(query => createQueryObject(query, { search }))
    }

    return (
        <div className={styles.search}>
            <input type="text"
                placeholder='Search ...' 
                value={search}
                onChange={e => setSearch(e.target.value.toLowerCase().trimStart())} />
            <button onClick={searchHandler}><ImSearch /></button>
        </div>
    )
}

export default SearchBox
