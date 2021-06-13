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
