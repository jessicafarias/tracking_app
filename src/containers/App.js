import '../styles/App.css';
import Dates from './Dates';
import Header from './Header';
import Toggle from './Toggle';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Tasks from './Tasks';


function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section className="view">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dates} />
          <Route path="/show/:tasks" component={Tasks} />
        </Switch>
      </BrowserRouter>
      </section>
      <Toggle />
    </div>
  );
}

export default App;
