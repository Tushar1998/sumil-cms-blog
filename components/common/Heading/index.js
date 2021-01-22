import PropTypes from "prop-types";

function Heading(props) {
  const children = props.children;

  const hTag = () => {
    switch (props.htag) {
      case "h2":
        return <h2 className={props.className}> {children} </h2>;
      case "h3":
        return <h3 className={props.className}> {children} </h3>;
      case "h4":
        return <h4 className={props.className}> {children} </h4>;
      case "h5":
        return <h5 className={props.className}> {children} </h5>;
      case "h6":
        return <h6 className={props.className}> {children} </h6>;
      default:
        return <h1 className={props.className}> {children} </h1>;
    }
  };
  return <div>{hTag()}</div>;
}

Heading.defaultProps = {
  className: "",
};

Heading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string]).isRequired,
  htag: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
};
export default Heading;
