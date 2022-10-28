import { Link } from 'react-router-dom'
import styles from './WishlistIndex.module.css'
import WishlistCard from "../../components/WishlistCard/WishlistCard"

const WishlistIndex = (props) => {
  const wishlists = props.wishlists
  return (
    <div className={styles.outerContainer}>
      <h1>WISHLISTS</h1>
      <Link to="/wishlists/new">
        <button className={styles.create}>Create</button>
      </Link>
    <main className={styles.innerContainer}>
        {wishlists.map((wishlist, idx) => (
          <WishlistCard wishlist={wishlist} key={idx} handleDeleteWishlist={props.handleDeleteWishlist}/>
        ))}
    </main>
    </div>
  )
}

export default WishlistIndex