function Paragraph(props) {
  return (
    <>
      {" "}
      <p className={props.className}> {props.data} </p>{" "}
    </>
  );
}

export default Paragraph;
