import { Link } from "react-router-dom"

const ProfileCard = ({ profiles, user }) => {
  return (
    <>
    {
      profiles.map(profile => (
        profile._id !== user.profile
          ? <Link to={`/profiles/${profile._id}`} key={profile._id}>
            <p>{profile.name}</p>
          </Link>
          : null
      ))
    }
  </>
  )
}

export default ProfileCard