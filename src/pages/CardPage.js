import AppBar from '../components/AppBar/AppBar';
import Done from '../components/Done/DoneBtn';
import TodayWrapper from '../components/TodayWrapper/TodayWrapper'
import TommorowWraper from '../components/TomorrowWrapper/TommorowWrapper'

const CardPage = () => {
  return (
    <>
      <AppBar />
      <TodayWrapper />
      <TommorowWraper />
      <Done/>
    </>)
}

export default CardPage;