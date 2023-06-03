import React, {useState} from 'react';
import './LoginPage.css';
import logo from '../../assets/Group.svg'
import character from '../../assets/pablo-sign-in 1.svg'
import '../../assets/fonts/AvenirNextLTPro-Regular.otf'

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className='login-page'>

      <section className='page-right'>
        <img className='logo' src={logo} alt="lendsqr's logo"/>
        <img className='character' src={character} alt='ui character' />
      </section>
     

      <section className='page-left'>
        <div>
          
          <div className='form-header'>
            <h2>Welcome!</h2>
            <p>Enter details to login.</p>
          </div>

          <form action="/dashboard">
            <input className='input' type="email" placeholder='Email' />

            <div className='password-input'>
              <input
                className='input'
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
              />
              <a
                href='#'
                className='password-toggle'
                onClick={togglePasswordVisibility}
              >
                {showPassword ? 'HIDE' : 'SHOW'}
              </a>
            </div>
            
            <a href="#">FORGET PASSWORD?</a>
            <button>LOG IN</button>
          </form>

        </div>
      </section>

    </div>
  );
};

export default LoginPage;
