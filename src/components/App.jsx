import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import data from 'user.json';
import stats from 'data.json';
import friends from 'friends.json';
import list from 'transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        // data={user}
        username={data.username}
        tag={data.tag}
        location={data.location}
        avatar={data.avatar}
        followers={data.stats.followers}
        views={data.stats.views}
        likes={data.stats.likes}
      />
      <Statistics text="Upload stats" stats={stats} />
      <FriendsList friends={friends} />
      <TransactionHistory list={list} />
    </div>
  );
};
