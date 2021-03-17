import { useState } from 'react';
import signUpRequest from '../requests/signUpRequest';
import '../styles/session.css';

const SignUp = () => {
  const [state, setState] = useState(
    {
      email: '',
      password: '',
      name: '',
    },
  );

  const handleClick = event => {
    switch (event.target.name) {
      case 'password':
        setState({
          email: state.email,
          password: event.target.value,
          name: state.name,
        });
        break;
      case 'email':
        setState({
          email: event.target.value,
          password: state.title,
          name: state.name,
        });
        break;
      case 'name':
        setState({
          email: state.email,
          password: state.title,
          name: event.target.value,
        });
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const user = {
      email: state.email,
      password: state.password,
      password_confirmation: state.password,
      name: state.name,
    };
    signUpRequest(user).then(response => {
      const token = response.message.toString();
      console.log(token);
      localStorage.setItem('token', JSON.stringify(token));
      console.log(JSON.parse(localStorage.getItem('token')));
    });
  };

  return (
    <div>
      <form className="h-100 w-100">
        <p className="w-100 text-center pt-5 mt-4">SIGN IN</p>
        <div className="d-flex align-items-center justify-content-center flex-column">
          <label htmlFor="name" className="p-2">
            <input placeholder="Name" type="text" id="name" name="name" onChange={handleClick} value={state.name} />
          </label>
          <label htmlFor="title" className="p-2">
            <input placeholder="Email" type="text" id="email" name="email" onChange={handleClick} value={state.email} />
          </label>
          <label htmlFor="password" className="p-2">
            <input placeholder="Password" type="text" id="password" name="password" onChange={handleClick} value={state.password} />
          </label>
          <div>
            <button type="submit" onClick={handleSubmit}> Login</button>
          </div>
        </div>
      </form>
      <div className="m-auto d-flex justify-content-center p-3">
        <a href="/logIn" className="text-center">Log in</a>
      </div>
    </div>
  );
};

export default SignUp;
