import { Profile } from 'components/Profile/Profile';
import PropTypes from 'prop-types';
import css from 'components/ProfilesBoard/ProfileBoards.module.css';
export const ProfileBoard = ({ data }) => {
  return (
    <div className={css.profileboard}>
      <Profile
        username={data.username}
        tag={data.tag}
        location={data.location}
        avatar={data.avatar}
        followers={data.stats.followers}
        views={data.stats.views}
        likes={data.stats.likes}
      />
    </div>
  );
};

ProfileBoard.propTypes = {
  data: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
