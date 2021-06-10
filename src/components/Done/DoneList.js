import React from 'react';
// import PropTypes from 'prop-types';
// import Card from '../TodoCard/TodoCard';
import s from './DoneList.module.css';

const DoneList = ({ cards }) => {
    const filtredCards = cards.filter(({ status }) =>  status === "Complete" ) 

    return (
        <ul className={s.list}>
            {filtredCards.map(({difficulty, title, date, time, category}) => (
                // <Card key={id}
                //     level={level}
                //     title={title}
                //     date={date}
                //     time={time}
                //     group={group}
                // />
                <li>
                    <ul>
                        <li>{title }</li>
                        <li>{ category}</li>
                        <li>{difficulty }</li>
                        <li>{date}, {time}</li>
                    </ul>
                </li>
            )
            )}
        </ul>
    );
};

// DoneList.propTypes = {
    
// };

export default DoneList;