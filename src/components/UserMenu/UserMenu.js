import React from 'react';
import s from './UserMenu.module.scss'
import { connect } from 'react-redux';
import { authSelectors} from '../../redux/auth';

const UserMenu = ({ email }) => {
  // console.log('email', email);

  let letter = '';
  let mail = '';

  if (email) {
    letter = email.slice(0, 1).toUpperCase();
    mail = email.charAt(0).toUpperCase() + email.slice(1).split("@")[0];
  }
  
  return (
  <div className={s.container}>
    <span className={s.wrapper}>
      <p className={s.letter}>{letter}</p>
    </span>
     <p className={s.hidden}>{mail} Quest Log</p>

  </div>
  )
};
const mapStateToProps = state => ({
  email: authSelectors.getEmailUser(state),
 
});

// const mapDispatchToProps = {
//   onLogout: authOperations.logOut,
// };

export default connect(mapStateToProps)(UserMenu);
