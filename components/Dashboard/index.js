import Card from "../Card";
import styles from "./dashboard.module.scss";
import { Link } from "next/link";

export default function Dashboard(props) {
  return (
    <div className={styles["blog-cards"]}>
      {props.blog.map((blogElement) => (
        <a
          key={blogElement.uid}
          href={`/blog/${blogElement.uid}`}
          className={styles["blog-link"]}
        >
          <Card
            src={blogElement.blog_image.url}
            author={blogElement.title}
            title={blogElement.title}
          />
        </a>
      ))}
    </div>
  );
}
