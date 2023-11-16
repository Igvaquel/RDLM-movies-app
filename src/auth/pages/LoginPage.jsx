/* eslint-disable react/no-unescaped-entities */
import './LoginPage.css';


export const LoginPage = () => {
  
  const openRegister = () => {
    var card = document.getElementById('card')

    card.style.transform = "rotateY(-180deg)"
  }
  const openLogin = () => {
    var card = document.getElementById('card')
    card.style.transform = "rotateY(0deg)"
  }
  return (
    <div className="container">
      <div className="card">
        <div className="inner-box" id='card'>
          <div className="card-front">
            <h2>Login</h2>
              <form className='form'>
                <input type="email" className='input-box' placeholder='Your email' required/>
                <input type="password" className='input-box' placeholder='**********' required/>
                <button type='submit' className='submit-btn'>Submit</button>
                <input type="checkbox"/><span>Remember Me</span>
              </form>
            <button type='button' className='btn'onClick={openRegister}>I'm New Here</button>
          </div>
          <div className="card-back">
            <h2>Register</h2>
              <form className='form'>
                <input type="text" className='input-box' placeholder='Full name' required/>
                <input type="email" className='input-box' placeholder='Your email' required/>
                <input type="password" className='input-box' placeholder='Password' required/>
                <input type="password" className='input-box' placeholder='Repeat your password' required/>
                <button type='submit' className='submit-btn'>Submit</button>
                <input type="checkbox"/><span>I agree to the </span><a href="https://www.linkedin.com/in/ignacio-vaquel/">terms and conditions</a>
              </form>
            <button type='button' className='btn' onClick={openLogin}>I've an account</button>
          </div>
        </div>
      </div>
    </div>
  )
}
