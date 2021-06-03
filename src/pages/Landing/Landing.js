import React, { Component } from 'react';
import pic1 from './assets/pic1.png';
import pic2 from './assets/pic2.png';
import  './Landing.css';

export default class Landing extends Component {
    render() {
        return (
            <div>
                <div className="box">
                <div className="logo">Questify</div>
                <h1 className="title">Questify will turn your life into <br/>
                    a thrilling game full of amazing<br/>
                    quests and exciting challenges.
                </h1>
                <div className="input-box">
                  <h2 className="appeal">Choose your name to sign up or log in</h2>
                  <input type="text" className="input"/>
                  <button className="button">go!</button>
                </div>
                </div>
                <img className='pic1' src={pic1}/>
                <img className='pic2' src={pic2}/>
            </div>
        )
    }
}