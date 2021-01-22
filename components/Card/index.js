import Image from "../common/Image";
import Heading from "../common/Heading";
import styles from "./card.module.scss";

function Card(props) {
  return (
    <div className={styles["card-section"]}>
      <div className={styles["image-section"]}>
        <Image src={props.src} alt={props.alt} />
      </div>
      <div className={styles["title-section"]}>
        <Heading>{props.title}</Heading>
      </div>
    </div>
  );
}
export default Card;
