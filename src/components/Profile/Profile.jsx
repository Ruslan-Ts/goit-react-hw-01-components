import {Container, DescriptionBox, Avatar, UserInfo, StatBox, StatItem, StatItemText} from './Profile.styled'
import PropTypes from 'prop-types';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Container>
      <DescriptionBox>
        <Avatar
          src={avatar}
          alt="User avatar"
        />
        <UserInfo>{username}</UserInfo>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </DescriptionBox>

      <StatBox>
        <StatItem>
          <StatItemText>Followers</StatItemText>
          <StatItemText>{stats.followers}</StatItemText>
        </StatItem>
        <StatItem>
          <StatItemText>Views</StatItemText>
          <StatItemText>{stats.views}</StatItemText>
        </StatItem>
        <StatItem>
          <StatItemText>Likes</StatItemText>
          <StatItemText>{stats.likes}</StatItemText>
        </StatItem>
      </StatBox>
    </Container>
  );
};

Profile.propTypes = {
username: PropTypes.string.isRequired,
tag: PropTypes.string.isRequired,
location: PropTypes.string.isRequired,
avatar: PropTypes.string.isRequired,
stats: PropTypes.shape({
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
}),
}

export default Profile;
