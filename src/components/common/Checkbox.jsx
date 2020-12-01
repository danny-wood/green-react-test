import PropTypes from "prop-types";

function Checkbox({ id, text, className, ...rest }) {
  return (
    <div className={`custom-checkbox-container ${className}`}>
      <label>
        <input id={id} type="checkbox" {...rest} />
        <span>{text}</span>
      </label>
    </div>
  );
}

export default Checkbox;

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};
