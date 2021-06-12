import React, { Component } from 'react';
import { connect } from 'react-redux';
import {authOperations} from '../../redux/auth'
import pic from '../../images/mobile/landingMobile.jpg';
import LandingClasses from './Landing.css';


 class Landing extends Component {

   state = {
    email: '',
    password: '',
  };

  // inputEmailId = shortid.generate();
  // inputPasswordId = shortid.generate();

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    // this.props.onRegister(this.state);
    this.props.onLogin(this.state);

    this.setState({ email: '', password: '' });
  };



   render() {
      const {email, password} = this.state
        return (
            <div className="Page">
                <div className="Box">
              <div className="logo">Questify</div>
                <h1 className="title">Questify will turn your life into <br/>
                    a thrilling game full of amazing<br/>
                    quests and exciting challenges.</h1>
                  <h2 className="appeal">Write your email to sign up or log in</h2>
                
              <form type="submit" onSubmit={this.handleSubmit}>
                <input
                  className="inputEmail"
                  type="email"
                  value={email}
                  name="email"
                  onChange={this.handleChange}
                  autoFocus
                  placeholder="Email" />
                <input
                  className="inputPassword"
                  type="password"
                  value={password}
                  name="password"
                  onChange={this.handleChange}
                  placeholder="Password" />
                   <button className="button" type="submit">go!</button>
                  </form>
                
              {/* <input type="text" placeholder='Email' className="inputEmail"/>
                  <input type="text" placeholder='Password' className="inputPassword"/> */}
                  {/* <button className="button">go!</button> */}
                  </div>
            </div>
        )
    }
    // <img className='Page' src={pic}/>
}



const mapDispatchToProps = {
  onRegister: authOperations.register,
  onLogin: authOperations.login,
}


export default connect(null, mapDispatchToProps)(Landing);

// import { useCallback, useState } from 'react';
// import { useDispatch } from 'react-redux';

// import {
//   authOperations,
// } from '../../redux/auth';

// // import s from './LoginPage.module.scss';

// function LoginPage() {
//   const [inputFields, setInputFields] = useState({email: '', password: ''});

//   const dispatch = useDispatch();

//   const onInputChange = (event) => {
//     const { name, value } = event.target;

//     setInputFields(state => ({...state, [name]: value}))
//   }

//   //----------onSubmit----------

//   const onSubmit = useCallback(e => {
//     e.preventDefault(); 
//     const credentials = {
//       email: inputFields.email,
//       password: inputFields.password,
//     }
    
//     // console.log(credentials);
//     dispatch(authOperations.register(credentials))
//   }, [inputFields, dispatch]);

//   return (
//     <div>
//       <h1>Questify</h1>
//       <p>Questify will turn your life into
//       a thrilling game full of amazing
//       quests and exciting challenges.
//       </p>
//       <p>Choose your name to sign up or log in</p>
//       <form type="submit" onSubmit={onSubmit}>
//         <input  type="email" value={inputFields.email} name="email" onChange={onInputChange} autoFocus placeholder="Email" />
//         <input  type="password" value={inputFields.password} name="password" onChange={onInputChange} placeholder="Password" />
//         <button  type="submit">go!</button>
//       </form>
//     </div>
//   )
// }

// // const mapStateToProps = (state) => ({
    
// // })

// const mapDispatchToProps = {
//   onRegister: authOperations.register,  
// }


// export default LoginPage;

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { authOperations } from '../../redux/auth';

// const styles = {
//   form: {
//     width: 320,
//   },
//   label: {
//     display: 'flex',
//     flexDirection: 'column',
//     marginBottom: 15,
//   },
// };

// class RegisterView extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onRegister(this.state);

//     this.setState({ email: '', password: '' });
//   };

//   render() {
//     const {email, password } = this.state;

//     return (
//       <div>
//         <h1>Страница регистрации</h1>

//         <form
//           onSubmit={this.handleSubmit}
//           style={styles.form}
//         //   autoComplete="off"
//         >

//           <label style={styles.label}>
//             Почта
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={this.handleChange}
//             />
//           </label>

//           <label style={styles.label}>
//             Пароль
//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={this.handleChange}
//             />
//           </label>

//           <button type="submit">Зарегистрироваться</button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };

// export default connect(null, mapDispatchToProps)(RegisterView);