import React,{useState, useEffect} from 'react';
// import PropTypes from 'prop-types';
import s from './TommorowWrapper.module.css';
import axios from 'axios';

// надо изменить на глобальную переменную где будет лежать токен авторизации
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MGJkZmU4MzhiYjU0ZjZmMTVhYjU3ZjAiLCJzaWQiOiI2MGMwYWVmZDhiYjU0ZjZmMTVhYjU4ZmYiLCJpYXQiOjE2MjMyNDA0NDUsImV4cCI6MTYyMzI0NDA0NX0.lPt19jtkmB-CDRlnpi4MlWVMI1nBgJ9l5icSu9ATcQ8'
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
                {filteredCards.map(({ difficulty, title, date, time, category, _id}) => (
                <li key={_id}>
                    <ul>
                        <li>{title}</li>
                        <li>{ category}</li>
                        <li>{difficulty }</li>
                        <li>{date}, {time}</li>
                    </ul>
                </li>
            )
            )}
        </ul>

            </div>
        
        
       
    );
};



