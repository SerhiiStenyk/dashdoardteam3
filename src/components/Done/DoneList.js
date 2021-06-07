import React from 'react';
// import PropTypes from 'prop-types';
// import Card from './Card/Card';
import s from './DoneList.module.css';

const DoneList = ({cards}) => {
    return (
        <ul className={s.list}>
            <li>card1</li>
            <li>card2</li>
            {/* {cards.map(({level, title, date, time, group, id}) => (
                <Card key={id}
                    level={level}
                    title={title}
                    date={date}
                    time={time}
                    group={group}
                />
            )
            )} */}
        </ul>
    );
};

// DoneList.propTypes = {
    
// };

export default DoneList;