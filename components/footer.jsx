import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontawesome";
import styles from "./footer.module.scss";

function Footer(props) {
  return (
    <div className={styles["footer"]}>
      <ul>
        <li>
          {" "}
          <a href={props.data[0].social_media_link[2].link.href}>
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </a>{" "}
        </li>
        <li>
          {" "}
          <a href={props.data[0].social_media_link[1].link.href}>
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>{" "}
        </li>
        <li>
          {" "}
          <a href={props.data[0].social_media_link[1].link.href}>
            <FontAwesomeIcon icon={["fab", "facebook"]} />
          </a>{" "}
        </li>
      </ul>
    </div>
  );
}

export default Footer;
