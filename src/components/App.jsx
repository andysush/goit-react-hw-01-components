import { ProfileBoard } from './ProfilesBoard/ProfilesBoard';
import user from 'user.json';

export const App = () => {
  return (
    <div>
      <ProfileBoard data={user} />
    </div>
  );
};
