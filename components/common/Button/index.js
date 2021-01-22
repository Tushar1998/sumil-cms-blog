import PropTypes from "prop-types";

function Button(props) {
  const children = props.children;
  return (
    <>
      <button form={props.form} type={props.type} className={props.className}>
        {" "}
        {children}
      </button>
    </>
  );
}

Button.defaultProps = {
  className: "",
  type: "button",
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string]).isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]).isRequired,
};
export default Button;
