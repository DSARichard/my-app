import PropTypes from 'prop-types';
import logo from '../logo.svg';
import Button from './Button'

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <Button />
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
