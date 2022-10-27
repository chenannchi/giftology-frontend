import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import styles from './ItemCard.module.css'

// Services
import * as wishlistService from '../../services/wishlistService'

const ItemCard = ({ item, wishlistId, handleDeleteItem }) => {
  const [itemPurchase, setItemPurchase] = useState(false)
  // console.log(itemPurchase, 'itemPurchase')
  // console.log(item.purchased.bought)
  console.log("ITEM!!!!!!",item)

  const handlePurchaseItem = async (itemId, wishlistId) => {
    const updatedItem = await wishlistService.updatePurchased(itemId, wishlistId)
    setItemPurchase(updatedItem.purchased.bought)
    // console.log(updatedItem.purchased.bought)
  }

  useEffect(() => {
    const fetchItemPurchase = async () => {
      const itemDetails = await wishlistService.showItem(wishlistId,item._id)
      console.log("ITEM DETAILS",itemDetails)
      setItemPurchase(itemDetails.purchased.bought)
    }
    fetchItemPurchase()
  }, [item,wishlistId])


  return (
    <>
      <article className={styles.container}>
        <img src={item.img} alt="img" className={styles.img} />
        <h2>
          {item.name}
        </h2>
        <h5>{item.category}</h5>
        <p>
          {item.desc}
        </p>
        <div className={styles.purchased}>
          <label htmlFor="purchased-input">Purchased</label>
          <input 
            type="checkbox" 
            id="purchased-input" 
            name="purchased"
            value={itemPurchase}
            onChange={() => handlePurchaseItem(item._id, wishlistId)}
            checked={itemPurchase}
          />
        </div>
        <a href={item.url}>
          <button className={styles.buy}>Buy🛒</button>
        </a>
        <Link to={`/item/${item._id}/edit-item`} state={item}>
            <button>Edit</button>
          </Link>
        <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
      </article>
    </>
  )
}

export default ItemCard