import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { UpdateTokenAction } from '../actions';
import loginRequest from '../requests/loginRequest';
import '../styles/session.css';

const Login = ({ tokenUpdate }) => {
  const [state, setState] = useState(
    {
      email: '',
      password: '',
    },
  );

  const handleClick = event => {
    if (event.target.name === 'password') {
      setState({
        email: state.email,
        password: event.target.value,
      });
    } else {
      setState({
        email: event.target.value,
        password: state.password,
      });
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const user = {
      email: state.email,
      password: state.password,
    };

    loginRequest(user).then(response => {
      // const token = response.message;
      tokenUpdate(response.message);
    });
  };

  return (
    <div className="w-100 m-auto d-flex align-items-center justfy-content-center flex-column session pt-5 mt-2">
      <p>LOG IN</p>
      <form>
        <div className="d-flex align-items-center justify-content-center m-auto flex-column pt-2">
          <label htmlFor="title" className="p-2">
            <input placeholder="Username" type="text" id="email" name="email" onChange={handleClick} value={state.email} />
          </label>
          <label htmlFor="title" className="p-2">
            <input placeholder="Password" type="password" id="password" name="password" onChange={handleClick} value={state.password} />
          </label>
          <div className="p-2">
            <button type="submit" onClick={handleSubmit}> Login</button>
          </div>
        </div>
      </form>
      <a href="/signUp">Register</a>

    </div>
  );
};

Login.propTypes = {
  tokenUpdate: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  tokenUpdate: token => {
    dispatch(UpdateTokenAction(token));
  },
});

export default connect(null, mapDispatchToProps)(Login);
