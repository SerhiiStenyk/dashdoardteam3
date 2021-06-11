import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  cardsOperations,
  cardsSelectors,
} from '../redux/cards';

import AppBar from '../components/AppBar/AppBar';
import CardTodoList from '../components/TodoCardsList';
import TodayWrapper from '../components/TodoCardsList/TodoCardItims/TodayWrapper/TodayWrapper.jsx';
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
    <>
      <AppBar />
      {isLoadingCard && <h1>Загржаем...</h1>}
      <TodayWrapper />
      {/* <TommorowWraper /> */}

      <Done />
      <CardTodoList />
    </>
  );
}
