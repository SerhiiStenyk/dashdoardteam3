import React from 'react';
import s from './UserMenu.module.scss'
// import Logout from '../Logout/Logout';
// import { connect } from 'react-redux';
// import { authSelectors, authOperations } from '../../redux/auth';


const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={s.container}>
    <span className={s.wrapper}>
      <p className={s.letter}>J</p> {name}
    </span>
     <p className={s.hidden}>Your email</p>
  </div>
);
// const mapStateToProps = state => ({
//   name: authSelectors.getUsername(state),
//   avatar: defaultAvatar,
// });

// const mapDispatchToProps = {
//   onLogout: authOperations.logOut,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);

export default UserMenu;