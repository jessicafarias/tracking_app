import '../styles/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import Toggle from './Toggle';
import Header from './Header';
import rootReducer from '../reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <>
      <Header />
      <section className="view">
        <BrowserRouter>
          <Switch>
            <Provider store={store}>
              <Route exact path="/" component={Toggle} />
            </Provider>
          </Switch>
        </BrowserRouter>
      </section>
    </>
  );
}

export default App;
