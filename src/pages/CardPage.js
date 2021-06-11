// import AppBar from '../components/AppBar/AppBar';
// import Done from '../components/Done/DoneBtn';
// import TodayWrapper from '../components/TodayWrapper/TodayWrapper'
// import TommorowWraper from '../components/TomorrowWrapper/TommorowWrapper'

// const CardPage = () => {
//   return (
//     <>
//       <AppBar />
// <TodayWrapper />
// <TommorowWraper />
// <Done/>
//     </>)
// }

// export default CardPage;

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  cardsOperations,
  cardsSelectors,
} from '../redux/cards';

import AppBar from '../components/AppBar/AppBar';
import TodayWrapper from '../components/TodayWrapper/TodayWrapper';
import TommorowWraper from '../components/TomorrowWrapper/TommorowWrapper';
import Done from '../components/Done/DoneBtn';

export default function CardPage() {
  const dispatch = useDispatch();
  const isLoadingCard = useSelector(
    cardsSelectors.getLoading,
  );

  useEffect(() => {
    dispatch(cardsOperations.fetchCards());
  }, [dispatch]);

  return (
    <div>
      <AppBar />
      {isLoadingCard && <h1>Загржаем...</h1>}
      <TodayWrapper />
      <TommorowWraper />
      <Done />
    </div>
  );
}
