import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  cardsOperations,
  cardsSelectors,
} from '../../redux/cards';

// import PropTypes from 'prop-types';
import sprite from '../../sprite.svg';
import s from './DoneBtn.module.css';

import DoneList from './DoneList';
import Container from '../Container/Container';

export default function DoneBtn() {
  const dispatch = useDispatch();

  const cards = useSelector(cardsSelectors.getCards);

  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const onRemoveCard = cardId => {
    // console.log(cardId);
    dispatch(cardsOperations.deleteCard(cardId));
  };

  return (
    <Container>
      <div className={s.head}>
        <button
          className={s.button}
          type="button"
          onClick={toggling}
        >
          DONE
          <svg className={s.icon}>
            {isOpen ? (
              <use href={sprite + '#arrow-down'}></use>
            ) : (
              <use href={sprite + '#arrow-up'}></use>
            )}
          </svg>
        </button>
        <span className={s.dashed}></span>
      </div>
      {isOpen && (
        <DoneList
          cards={cards}
          onRemove={() => onRemoveCard}
        />
      )}
    </Container>

    // </div>
  );
}

// Done.propTypes = {

// };
