import PropTypes from 'prop-types';
import logo from '../logo.svg';
import Button from './Button';

const Header = ({ title }) => {
  const onClick = () => {
    console.log("Click")
  };
  
  return (
    <header className="header">
      <h1>{title}</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <Button color="#355E3B" text="Add Task" onClick={onClick} />
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
