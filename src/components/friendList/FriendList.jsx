import css from "./FriendList.module.css";
import PropTypes from "prop-types";
import { FriendListItem } from './../friendListItem/FriendListItem';

export const FriendList = ({ friends }) => (
    <ul className={css.friendList}>{friends.map(friend =>
        <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} key={friend.id} />)}
    </ul>
)

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object)
}