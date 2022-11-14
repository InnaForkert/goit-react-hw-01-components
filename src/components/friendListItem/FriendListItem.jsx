import css from "./FriendListItem.module.css";
import PropTypes from "prop-types";

export const FriendListItem = ({ avatar, name, isOnline }) => (
    <li className={css.item} >
        <span className={css.status}>{isOnline ? 'online' : 'offline'}</span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </li>
)

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}