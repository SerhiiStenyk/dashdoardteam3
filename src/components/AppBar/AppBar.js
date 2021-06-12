import Container from '../Container/Container'
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu'
import s from './AppBar.module.scss';


const AppBar = () => {
  return (
    <div className={s.wrapper}>
      <Container>
        <header className={s.header}>
          <Logo />
          <UserMenu/>
          <Navigation />
        </header>
      </Container>
    </div>
  )
}

export default AppBar


// import { useCallback } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
// import sprite from '../../sprite.svg';
// import {
//   authOperations,
//   authSelectors
// } from '../../redux/auth';

// // import Icons from '../Icons';
// // import styles from './Header.module.scss';

// export default function Header() {
//     const dispatch = useDispatch();
//     // const email = useSelector(authSelectors.getUserEmail);


    
//         // const nameFromEmail = email.split("@", 1);
//         // const firstLetter = email.slice(0, 1).toUpperCase();
     
 

//     // let nameFromEmail = '';
//     // let firstLetter = '';
//     // if (email) {
//     //   nameFromEmail = email.split("@")[0];
//     //   firstLetter = email.slice(0, 1).toUpperCase();
//     // }
//     // const log = GGG


//     const onLogOut = useCallback(() => {
//         dispatch(authOperations.logOut());
//     }, [dispatch]);

//     return (
//         <div >
//             <div >
//                 <div >
//                     <span >Questify</span>
//                     <div >
//                         <p >a</p>
//                         <p >
//                             {}'s Quest Log
//                         </p>
//                     </div>
//                     <button
//                         type="button"
//                         onClick={onLogOut}
                        
//                     >
//                         <svg >
//           <use href={`${sprite}#logout`}></use>
//         </svg>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// Header.propTypes = {
//     email: PropTypes.string,
//     onLogOut: PropTypes.func,
// };