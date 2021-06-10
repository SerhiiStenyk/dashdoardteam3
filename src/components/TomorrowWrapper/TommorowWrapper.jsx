import React,{useState, useEffect} from 'react';
// import PropTypes from 'prop-types';
import s from './TommorowWrapper.module.css';
import axios from 'axios';
import TodoCard from '../TodoCard/TodoCard'

// надо изменить на глобальную переменную где будет лежать токен авторизации
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MGJkZmU4MzhiYjU0ZjZmMTVhYjU3ZjAiLCJzaWQiOiI2MGMyNDMyMzhiYjU0ZjZmMTVhYjU5N2EiLCJpYXQiOjE2MjMzNDM5MDcsImV4cCI6MTYyMzM0NzUwN30.h8D47iwlnQh4w7cxmhSB4tT2V2DvP9ZbZj3Gd2nDmOE'
const url = 'https://questify-backend.goit.global/card'

export default function TmmorowWrapper() {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        axios.get(url, { headers: { "Authorization": `Bearer ${token}` } })
            .then(({ data }) =>  setCards(data.cards))
            .catch(err => console.log(err))
    }, [])
    
    const today = new Date()
    const dateToCompar = `${today.getFullYear()}-${today.getMonth() < 9 ? `0${today.getMonth()+1}` : today.getMonth()+1}-${today.getDate() < 10 ? `0${today.getDate()}` : today.getDate() }`

    const filteredCards = cards.filter(({ status, date }) => status !== "Complete" && date > dateToCompar)
    
    return (

            <div className={s.container}>
                <h2 className={s.dayTitle}>TOMMOROW</h2>
            
                <ul className={s.list}>
                {filteredCards.map(({ difficulty, title, date, time, category, status, type, _id }) => (
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

            </div>
        
        
       
    );
};



