import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  cardsOperations,
  cardsSelectors,
} from '../redux/cards';

import LoaderSpinner from '../components/LoaderSpinner/LoaderSpinner';
import AppBar from '../components/AppBar/AppBar';
import TodayWrapper from '../components/TodayWrapper/TodayWrapper';
import TommorowWraper from '../components/TomorrowWrapper/TommorowWrapper';
import './CardPage.scss';

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
    <div className="cardPage">
      <AppBar />
      {isLoadingCard && <LoaderSpinner />}
      <TodayWrapper />
      <TommorowWraper />
      <Done />
    </div>
  );
}
