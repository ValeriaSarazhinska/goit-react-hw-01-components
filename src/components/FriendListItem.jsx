import css from "../styles/friendListItem.module.css"
import PropTypes from "prop-types"
import Statistics from "./Statistics";

const FriendListItem = ({avatar, name, isOnline,id}) => {
  return (
    <li className={css.item} key={id}>
      {isOnline ? <span className={css.status}  style={{backgroundColor:"lawngreen"}}/>: <span className={css.status} style={{backgroundColor:"orangered"}}/> }
      <img className={css.avatar} src={avatar} alt="User avatar" width="48"/>
      <p className={css.name}>{name}</p>
    </li>
  )
}

Statistics.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
}

export default FriendListItem
