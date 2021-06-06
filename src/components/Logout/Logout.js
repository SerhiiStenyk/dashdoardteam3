import { NavLink } from 'react-router-dom';
// import routes from './routes';
//import s from './Logout.module.scss';
import sprite from '../../sprite.svg'

const Logout = () => {
  return (
     <NavLink
      to="/"
      exact
      //className={s.link}
      // activeClassName={s.activeLink}
    >
      <svg /*className={s.svg}*/>
        <use href={`${sprite}#logout`}></use>
      </svg>
    </NavLink>
  )
}

export default Logout;

// onClick={this.handleGoBack}