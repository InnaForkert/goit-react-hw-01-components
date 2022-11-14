import user from './../user.json';
import data from './../data.json';
import { Profile } from 'components/profile/Profile';
import { Statistics } from 'components/statistics/Statistics';



export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </>
  );
};
