import '../styles/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dates from './Dates';
import Toggle from './Toggle';
import Tasks from './Tasks';
import Header from './Header';

function App() {
  return (
    <>
      <Header />
      <section className="view">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Dates} />
            <Route path="/show/:tasks" component={Tasks} />
          </Switch>
        </BrowserRouter>
      </section>
      <Toggle />
    </>
  );
}

export default App;
