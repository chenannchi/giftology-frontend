import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from './ProfileDetails.module.css'
import { Link } from "react-router-dom"

import * as profileService from '../../services/profileService'

const ProfileDetails = () => {
  const { id } = useParams()
  const [currProfile, setProfile] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.show(id)
      setProfile(profileData)
    }
    fetchProfile()
  }, [id])

  const avatarIds = [0, 1, 2, 3, 4, 5, 6, 7]
  let currentAvatar = avatarIds[Math.floor(Math.random() * (avatarIds.length))]

  return (
    <div>
      {currProfile
        ?
        <div className={styles.profileContainer}>
          <div>
            <img src={`/covers/cover2.jpg`} alt="cover" className={styles.cover} />
            <img className={styles.image} src={
              currProfile.photo
                ? currProfile.photo
                : `/avatars/${currentAvatar}.png`
            } alt='profile' />
          </div>
        
          <h1 className={styles.profileName}>{currProfile.name}</h1>

          <h2>WISHLISTS</h2>
          <div className={styles.wishlistContainer}>
          {currProfile.wishlists.length
            ? currProfile.wishlists.map((wishlist, idx) => (
              <div className={styles.wishlistBox} key={idx} >
                <div className={styles.title}>{wishlist.name}</div>
                <div>
                  <Link to={`/wishlists/${wishlist._id}`}>
                    <button className={styles.viewButton}>View wishlist</button>
                  </Link>
                </div>
              </div>
            ))
            : <p>No wishlists yet </p>}
          </div>
        </div>
        : <p> loading</p>
      }
    </div>
  )
}

export default ProfileDetails;