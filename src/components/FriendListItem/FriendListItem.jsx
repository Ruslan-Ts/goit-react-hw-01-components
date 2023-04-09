import { TbPlanet } from 'react-icons/tb';
import {FriendListCard, Chip, FriendName} from './FriendListItem.styled'

import PropTypes from 'prop-types';

function FriendListItem({avatar, name, isOnline}) {
  return <FriendListCard>
    <Chip type={isOnline}><TbPlanet style={
      {width: 40, height: 40}} /></Chip>
  <img src={avatar} alt={name} width="48" />
  <FriendName>{name}</FriendName>
</FriendListCard>
};

export default FriendListItem;

FriendListItem.propTypes = {
avatar: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
isOnline: PropTypes.bool.isRequired,
};