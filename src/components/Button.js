import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  return (
    //event -> action that happens when triggered
    <button
      onClick={onClick} //onClick is an event
      className="btn"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
