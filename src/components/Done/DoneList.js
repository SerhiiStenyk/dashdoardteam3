import React from 'react';
// import PropTypes from 'prop-types';
// import Card from '../TodoCard/TodoCard';
import s from './DoneList.module.css';

import TodoCard from '../TodoCard/TodoCard';

const DoneList = ({ cards, onRemove }) => {
  let filtredCards;

  if (cards) {
    filtredCards = cards.filter(
      ({ status }) => status === 'Complete',
    );
  }

  return (
    <ul className={s.list}>
      {filtredCards &&
        filtredCards.map(
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
              onRemove={() => onRemove(_id)}
            />
          ),
        )}
    </ul>
  );
};

// DoneList.propTypes = {

// };

export default DoneList;
