import PropTypes from 'prop-types';
import logo from '../logo.svg';

const Header = ({ title }) => {
  return (
    <header>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>{title}</h1>
    </header>
  );
};
Header.propTypes = {
  title: PropTypes.string,
};
Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
