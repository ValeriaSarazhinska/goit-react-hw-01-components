import PropTypes from "prop-types"
import css from "../styles/profile.module.css"


const Profile = ({username, tag, location, avatar, stats}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={css.avatar}
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.item}>
          <span className={css.label}>Followers</span>
          <span className="quantity">{stats["followers"]}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Views</span>
          <span className="quantity">{stats["views"]}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Likes</span>
          <span className="quantity">{stats["likes"]}</span>
        </li>
      </ul>
    </div>
  )
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
}

export default Profile
