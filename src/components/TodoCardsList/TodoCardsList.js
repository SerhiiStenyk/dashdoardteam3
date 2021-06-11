// import PropTypes from 'prop-types';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import {
  cardsOperations,
  cardsSelectors,
} from '../../redux/cards';
// import Filter from '../Filter';
// import Title from '../Title/Title';
// import './ContactList.css';

import CardTodo from '../TodoCard/TodoCard';

export default function ContactList() {
  const dispatch = useDispatch();

  const cards = useSelector(cardsSelectors.getCards);
  console.log(
    '🚀 ~ file: TodoCardsList.js ~ line 20 ~ ContactList ~ cards',
    cards.cards,
  );

  //   const filteredContacts = useSelector(
  //     cardsSelectors.getfilteredContacts,
  //   );
  //   const searchName = useSelector(cardsSelectors.getFilter);

  const onRemoveContact = contactId =>
    dispatch(cardsOperations.deleteCard(contactId));

  return (
    <>
      {cards.cards &&
        cards.cards.map(
          ({
            _id,
            category,
            date,
            difficulty,
            status,
            time,
            title,
            type,
          }) => (
            <CardTodo
              key={_id}
              id={_id}
              category={category}
              date={date}
              difficulty={difficulty}
              status={status}
              time={time}
              title={title}
              type={type}
              onRemove={() => onRemoveContact(_id)}
            />
          ),
        )}
    </>
  );
}

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//       number: PropTypes.string,
//       name: PropTypes.string,
//     }),
//   ),
//   onRemoveContact: PropTypes.func,
// };
