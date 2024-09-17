//USE REACT ICONS 
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
//USE REACT ICONS

import { Link } from 'react-router-dom'
import { shortenText } from "../helpers/helper";

import styles from './Card.module.css'

const Card = ({ data: { id, title, image, price } }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} />
            <h3>{shortenText(title)}</h3>
            <p>{price}</p>
            <div className={styles.actions}>
                <Link to={`/products/${id}`}><TbListDetails /></Link>
                <div>
                    <button><TbShoppingBagCheck /></button>
                </div>
            </div>
        </div>
    )
}

export default Card
