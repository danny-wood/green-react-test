import PropTypes from "prop-types";

function Button({
  children,
  type = "button",
  className = "primary-button",
  ...rest
}) {
  return (
    <button type="submit" className={className} {...rest}>
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  className: PropTypes.string,
};
