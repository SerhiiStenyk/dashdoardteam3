import { useSelector, useDispatch } from 'react-redux';

import {
  cardsOperations,
  cardsSelectors,
} from '../../redux/cards';
// import PropTypes from 'prop-types';
import s from './TommorowWrapper.module.css';

import TodoCard from '../TodoCard/TodoCard';

export default function TmmorowWrapper() {
  const dispatch = useDispatch();
  const cards = useSelector(cardsSelectors.getCards);

  const today = new Date();
  const dateToCompar = `${today.getFullYear()}-${
    today.getMonth() < 9
      ? `0${today.getMonth() + 1}`
      : today.getMonth() + 1
  }-${
    today.getDate() < 10
      ? `0${today.getDate()}`
      : today.getDate()
  }`;

  const isTommorow = true;

  let filteredCards;

  if (cards) {
    filteredCards = cards.filter(
      ({ status, date }) =>
        status !== 'Complete' && date > dateToCompar,
    );
  }

  const onRemoveCard = cardId => {
    // console.log(cardId);
    dispatch(cardsOperations.deleteCard(cardId));
  };

  return (
    <div className={s.container}>
      <h2 className={s.dayTitle}>TOMORROW</h2>

      <ul className={s.list}>
        {filteredCards &&
          filteredCards.map(
            ({
              difficulty,
              title,
              date,
              time,
              category,
              status,
              type,
              _id,
            }) => (
              <TodoCard
                key={_id}
                id={_id}
                category={category}
                date={date}
                difficulty={difficulty}
                status={status}
                time={time}
                title={title}
                type={type}
                isTommorow={isTommorow}
                onRemove={() => onRemoveCard(_id)}
              />
            ),
          )}
      </ul>
    </div>
  );
}
