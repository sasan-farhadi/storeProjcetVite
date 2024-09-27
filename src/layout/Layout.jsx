import { PiShoppingCartSimpleBold } from "react-icons/pi"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

import styles from './Layout.module.css'

const Layout = ({ children }) => {
    const [state] = useCart()

    return (
        <>
            <header className={styles.header}>
                <Link to="/products">Shop</Link>
                <div>
                    <Link to="/checkout"><PiShoppingCartSimpleBold />
                        {
                            !!state.itemsCounter && (<span>{state.itemsCounter}</span>)
                        }
                    </Link>
                </div>
            </header>

            {children}

            <footer className={styles.footer}>
                <p>shop website</p>
            </footer>
        </>
    )
}

export default Layout
