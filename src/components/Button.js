import PropTypes from 'prop-types';

const Button = ({ color, text }) => {
  return (
    <button className="btn" style={{ backgroundColor: color, }}>{text}</button>
  );
};
Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};
Button.defaultProps = {
  text: "Add Task",
};

export default Button;
