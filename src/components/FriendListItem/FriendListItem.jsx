

function FriendListItem({avatar, name, isOnline}) {
  return <li className="item">
      <span className="status"></span>
  <img className="avatar" src={avatar} alt={name} width="48" />
  <p className="">{name}</p>
</li>
};

export default FriendListItem;