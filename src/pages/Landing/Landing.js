import React, { Component } from 'react';
//import pic from '../../images/desktop/landing.jpg';
import  './Landing.css';

export default class Landing extends Component {
    render() {
        return (
            <div>
                <div className="box">
                <div className="logo">Questify</div>
                <h1 className="title">Questify will turn your life into <br/>
                    a thrilling game full of amazing<br/>
                    quests and exciting challenges.</h1>
                  <h2 className="appeal">Write your email to sign up or log in</h2>
                  <input type="text" placeholder='Email' className="input"/>
                  <input type="text" placeholder='Password' className="input"/>
                  <button className="button">go!</button>
                </div>
            </div>
        )
    }
    //<img className='pic1' src={pic}/>
}