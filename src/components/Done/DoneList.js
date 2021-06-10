import React from 'react';
// import PropTypes from 'prop-types';
// import Card from '../TodoCard/TodoCard';
import s from './DoneList.module.css';
import TodoCard from '../TodoCard/TodoCard'

const DoneList = ({ cards }) => {
    const filtredCards = cards.filter(({ status }) =>  status === "Complete" ) 

    return (
        <ul className={s.list}>
            {filtredCards.map(({ difficulty, title, date, time, category, status, type, _id }) => (
                // <Card key={id}
                //     level={level}
                //     title={title}
                //     date={date}
                //     time={time}
                //     group={group}
                // />
                  <TodoCard key={_id}
                        id={_id}
                        category={category}
                        date={date}
                        difficulty={difficulty}
                        status={status}
                        time={time}
                        title={title}
                        type={type}
                    />
            )
            )}
        </ul>
    );
};

// DoneList.propTypes = {
    
// };

export default DoneList;