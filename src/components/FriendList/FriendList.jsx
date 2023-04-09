import { FriendListBox, } from './FriendList.style'
import FriendListItem from "components/FriendListItem/FriendListItem";
import PropTypes from 'prop-types';

function FriendList({friends}) {
    return <FriendListBox>
            
            {friends.map(({id, avatar, name, isOnline}) => (
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />))}
    
  </FriendListBox>
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};