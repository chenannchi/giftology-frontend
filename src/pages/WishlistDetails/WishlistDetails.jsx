import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

// import { wishlists } from "../../components/data"

// components
// import Loading from "../Loading/Loading"
// import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"
import ItemCard from "../../components/ItemCard/ItemCard"
import styles from "./WishlistDetails.module.css"

// Services
import * as wishlistService from "../../services/wishlistService"

const WishlistDetails = ({user, items, setItems, setWishlistId, handleDeleteItem}) => {
  const { id } = useParams()
  const [wishlist, setWishlist] = useState({})

  useEffect(() => {
    const fetchWishlist = async () => {
      const data = await wishlistService.show(id)
      setWishlist(data)
      const itemData = await wishlistService.itemIndex(id)
      setItems(itemData)
      setWishlistId(id)
    }
    fetchWishlist()
  }, [id, setItems, setWishlistId])

  return (
    <main>
      <article className={styles.container}>
        <div className={styles.wishlistDetails}>
          <div className={styles.wishlistName}>{wishlist.name}</div>
          <div className={styles.description}>
              <p>{wishlist.description}</p>
          </div>
          {user.profile === wishlist.author ?
            <Link to={`/wishlists/${wishlist._id}/new-item`} >
              <button>Add Item</button>
            </Link>
          :
            null
          }
        </div>
        <div className={styles.cardsContainer}> 
        {items.length ?
          items.map((item, idx) => (
            <ItemCard user={user} key={idx} item={item} handleDeleteItem={handleDeleteItem} wishlistId={id} author ={wishlist.author}/>
          ))
          : <p>No items yet!</p>
        }
        </div>
      </article>
    </main>
  )
}

export default WishlistDetails