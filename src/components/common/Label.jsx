import PropTypes from "prop-types";

function Label({ text, htmlFor, className, ...rest }) {
  return (
    <label htmlFor={htmlFor} className={`mb-10 ${className}`} {...rest}>
      {text}
    </label>
  );
}

export default Label;

Label.propTypes = {
  text: PropTypes.string.isRequired,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
};
