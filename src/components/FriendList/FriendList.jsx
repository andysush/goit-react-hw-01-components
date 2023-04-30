import PropTypes from 'prop-types';
import { FriendsListItem } from 'components/FriendListItem/FriendListItem';
import css from './FriendList.module.css';
export const FriendsList = ({ friends }) => {
  return (
    <div className={css.friendboard}>
      <ul className={css.friendlist}>
        {friends.map(friend => {
          return (
            <FriendsListItem
              key={friend.id}
              id={friend.id}
              name={friend.name}
              isOnline={friend.isOnline}
              avatar={friend.avatar}
            />
          );
        })}
      </ul>
    </div>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
