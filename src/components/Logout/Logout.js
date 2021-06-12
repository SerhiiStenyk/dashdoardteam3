import React from 'react';
import { authOperations } from '../../redux/auth';
import s from './Logout.module.scss';
import sprite from '../../sprite.svg';
import { connect } from 'react-redux';


const Logout = ({onLogout}) => {
  return (
    <div>
      <button
        className={s.link}
        type="button"
        onClick={onLogout}
        >
        <svg className={s.svg}>
          <use href={`${sprite}#logout`}></use>
        </svg>
      </button>
    </div>
  );
};



// class Logout extends Component {
  

//   render() {
//     return (
//     <div>
//       <button
//         className={s.link}
//         type="button"
//         // onClick={onLogout}
//         >
//         <svg className={s.svg}>
//           <use href={`${sprite}#logout`}></use>
//         </svg>
//       </button>
//     </div>
//     );
//   }

// }



const mapDispatchToProps = {
  onLogout: authOperations.logOut,
}


export default connect(null, mapDispatchToProps)(Logout);

// const Logout = () => {
//   return (
//      <NavLink
//       to="/"
//       exact
//       className={s.link}
//     >
//       <svg className={s.svg}>
//         <use href={`${sprite}#logout`}></use>
//       </svg>
//     </NavLink>
//   )
// }

// export default Logout;

// onClick={this.handleGoBack}