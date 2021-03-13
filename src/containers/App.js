import '../styles/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Toggle from './Toggle';
import Header from './Header';

function App() {
  return (
    <>
      <Header />
      <section className="view">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Toggle} />
          </Switch>
        </BrowserRouter>
      </section>
    </>
  );
}

export default App;
