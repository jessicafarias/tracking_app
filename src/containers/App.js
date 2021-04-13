import '../styles/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import Toggle from './Toggle';
import Header from './Header';
import rootReducer from '../reducers';
import Login from './LogIn';
import SignUp from './SignUp';

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <>
      <Header />
      <section>
        <div id="notice" />
        <BrowserRouter>
          <Switch>
            <Provider store={store}>
              <Route exact path="/" component={Toggle} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
            </Provider>
          </Switch>
        </BrowserRouter>
      </section>
    </>
  );
}

export default App;
