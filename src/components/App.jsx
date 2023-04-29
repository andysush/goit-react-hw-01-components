import { ProfileBoard } from './ProfilesBoard/ProfilesBoard';
// import { StatisticTitle } from './StatisticTitle/StatisticTitle';
import { StatisticBoard } from './StatisticBoard/StatisticBoard';
import user from 'user.json';
import data from 'data.json';

export const App = () => {
  return (
    <>
      <div>
        <ProfileBoard data={user} />
        <StatisticBoard text="Upload stats" stats={data} />
      </div>
    </>
  );
};
