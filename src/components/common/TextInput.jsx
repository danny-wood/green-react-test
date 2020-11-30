import PropTypes from "prop-types";

function TextInput({
  id,
  type,
  label,
  placeholder,
  className,
  isRequired = false,
}) {
  return (
    <>
      {label && (
        <label htmlFor={id} className="mb-10">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={`form-control ${className}`}
        placeholder={placeholder}
        required={isRequired}
      />
    </>
  );
}

export default TextInput;

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  isRequired: PropTypes.bool,
};
