import PropTypes from "prop-types";

function TextInput({
  id,
  type,
  placeholder,
  className,
  isRequired = false,
  ...rest
}) {
  return (
    <>
      <input
        id={id}
        type={type}
        className={`form-control ${className}`}
        placeholder={placeholder}
        required={isRequired}
        {...rest}
      />
    </>
  );
}

export default TextInput;

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  isRequired: PropTypes.bool,
};
