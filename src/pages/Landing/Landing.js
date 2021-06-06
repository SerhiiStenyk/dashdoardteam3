import React, { Component } from 'react';
import pic from '../../images/mobile/landingMobile.jpg';
import LandingClasses from  './Landing.css';

export default class Landing extends Component {
    render() {
        return (
            <div className="Page">
                <img className='Page' src={pic}/>
                <div className="Box">
                <div className="logo">Questify</div>
                <h1 className="title">Questify will turn your life into <br/>
                    a thrilling game full of amazing<br/>
                    quests and exciting challenges.</h1>
                  <h2 className="appeal">Choose your name to sign up or log in</h2>
                  <input type="text" placeholder='Email' className="inputEmail"/>
                  <input type="text" placeholder='Password' className="inputPassword"/>
                  <button className="button">go!</button>
                </div>
            </div>
        )
    }
}