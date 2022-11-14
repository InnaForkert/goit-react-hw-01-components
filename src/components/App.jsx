import user from './../user.json';
import data from './../data.json';
import friends from './../friends.json';
import { Profile } from 'components/profile/Profile';
import { Statistics } from 'components/statistics/Statistics';
import { FriendList } from 'components/friendList/FriendList';



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
      <FriendList friends={friends} />
    </>
  );
};
