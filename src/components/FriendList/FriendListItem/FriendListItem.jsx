import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.friendListItem}>
      <span>
        <div className={isOnline ? css.online : css.offline}></div>
      </span>
      <img src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
