import React,{useState} from 'react';
// import PropTypes from 'prop-types';
import sprite from '../../sprite.svg';
import s from './DoneBtn.module.css';
import DoneList from './DoneList';
import Container from '../Container/Container';

// import cards from './example.json';

export default function DoneBtn() {
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);


    return (
        // <div className={s.container}>

            <Container>
                <div className={s.head}>
            <button className={s.button} type="button" onClick={toggling}>
                DONE
                 <svg className={s.icon}>
                    {isOpen ? <use href={sprite + "#arrow-down"}></use> : <use href={sprite + "#arrow-up"}></use>}
                 </svg>
            </button>
            <span className={s.dashed}></span>
            </div>
            {isOpen && <DoneList cards={""}/>}

            </Container>
        
        // </div>
    );
};

// Done.propTypes = {
    
// };

