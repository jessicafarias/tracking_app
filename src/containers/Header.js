import DeleteSession from '../components/DeleteSession';
import '../styles/header.css';

const Header = () => (
  <div className="navbar header-blue">
    <div className="d-flex justify-content-center p-2">
      <a href="/" className="nolink">
        Track.it
      </a>
    </div>
    <DeleteSession />
  </div>
);

export default Header;
