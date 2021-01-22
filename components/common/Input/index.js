import PropTypes from "prop-types";
function Input(props) {
  return (
    <>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        className={props.className}
        onChange={props.onChange}
        value={props.value}
      />{" "}
    </>
  );
}

Input.defaultProps = {
  type: "text",
  name: "text-field",
  placeholder: "text-field",
  className: "",
};

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};
export default Input;
