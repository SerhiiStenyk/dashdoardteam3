import s from './Navigation.module.scss'
// import UserMenu from '../UserMenu/UserMenu';
import Logout from '../Logout/Logout';

const Navigation = () => {
  return (
    <div className={s.wrapper}>
      {/* <UserMenu /> */}
      <nav className={s.nav}>
      <Logout/>
      </nav>
    </div>
  )
}

export default Navigation;