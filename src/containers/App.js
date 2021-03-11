import '../styles/App.css';
import Dates from './Dates';
import Header from './Header';
import Toggle from './Toggle';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section className="view">
        <Dates />
      </section>
      <Toggle />
    </div>
  );
}

export default App;
