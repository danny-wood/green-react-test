import PropTypes from "prop-types";

function Checkbox({ id, text, className }) {
  return (
    <div className={`custom-checkbox-container ${className}`}>
      <input id={id} type="checkbox" />
      <label htmlFor={id}>{text}</label>
    </div>
  );
}

export default Checkbox;

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};
