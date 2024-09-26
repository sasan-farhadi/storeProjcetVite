import { ImSearch } from 'react-icons/im'
import { createQueryObject } from '../helpers/helper'

const SearchBox = ({ search, setSearch, setQuery }) => {
    const searchHandler = () => {
        setQuery(query => createQueryObject(query, { search }))
    }

    return (
        <div>
            <input type="text"
                placeholder='Search ...'
                value={search}
                onChange={e => setSearch(e.target.value.toLowerCase().trimStart())} />
            <button onClick={searchHandler}><ImSearch /></button>
        </div>
    )
}

export default SearchBox
