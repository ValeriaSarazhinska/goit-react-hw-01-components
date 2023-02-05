import FriendListItem from "./FriendListItem";

const FriendList = ({friends}) => {
  return (
    <ul className="friend-list">
      {friends.map((friend, index) => (
        <FriendListItem key= {index} avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                        id={friend.id}/>
      ))}
    </ul>
  )
}
export default FriendList
