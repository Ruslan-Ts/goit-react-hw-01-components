import {Container, DescriptionBox, Avatar, UserInfo, StatBox} from './Profile.styled'
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

      <StatBox className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
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
