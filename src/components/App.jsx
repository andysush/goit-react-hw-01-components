import { ProfileBoard } from './ProfilesBoard/ProfilesBoard';
import { StatisticBoard } from './StatisticBoard/StatisticBoard';
import { FriendsList } from './FriendList/FriendList';
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';

export const App = () => {
  return (
    <div>
      <ProfileBoard data={user} />
      <StatisticBoard text="Upload stats" stats={data} />
      <FriendsList friends={friends} />
    </div>
  );
};
