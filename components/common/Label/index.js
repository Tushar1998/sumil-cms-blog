import PropTypes from "prop-types";

function Label(props) {
  const children = props.children;
  return (
    <>
      <label className={props.className}> {children}</label>
    </>
  );
}
Label.defaultProps = {
  className: "",
};

Label.propTypes = {
  className: PropTypes.string,
  // children: PropTypes.element.isRequired,
  children: PropTypes.oneOfType([PropTypes.string]).isRequired,
};
export default Label;
