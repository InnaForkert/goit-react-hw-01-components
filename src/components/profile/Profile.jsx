import css from "./Profile.module.css";
import PropTypes from "prop-types";

export const Profile = ({ username, tag, location, avatar, stats }) => (
    <div className={css.profile}>
        <div className={css.description}>
            <img
                src={avatar}
                alt="User avatar"
                className={css.avatar}
            />
            <p className={css.name}>{username}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
        </div>
        <ul className={css.stats}>
            <li className={css.stat}>
                <span className={css.label}>Followers</span>
                <span className={css.num}>{stats.followers}</span>
            </li>
            <li className={css.stat}>
                <span className={css.label}>Views</span>
                <span className={css.num}>{stats.views}</span>
            </li>
            <li className={css.stat}>
                <span className={css.label}>Likes</span>
                <span className={css.num}>{stats.likes}</span>
            </li>
        </ul>
    </div>
)

Profile.propTypes = {
    username: PropTypes.string, tag: PropTypes.string, location: PropTypes.string, avatar: PropTypes.string, stats: PropTypes.objectOf(PropTypes.number)
}