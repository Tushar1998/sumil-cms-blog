import Image from "../common/Image";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
// import { Link } from "react-router-dom";
import styles from "./BlogComponent.module.scss";
function BlogComponent(props) {
  const blog = props.blog.data[0];
  return (
    // <h1>sumil </h1>
    <div className={styles["blog"]}>
      <div className={styles["blog-container"]}>
        <div className={styles["blog-tite"]}>
          <Heading>{blog.title}</Heading>
        </div>
        <div className={styles["blog-image"]}>
          <Image src={blog.blog_image.url} alt={props.blog.title} />
        </div>
        <div className={styles["blog-content"]}>
          <Paragraph data={blog.blog_content} />{" "}
        </div>
      </div>
      <div className={styles["releated-links"]}>
        <ul>
          {blog.related_links.map((link, index) => {
            return (
              <li key={`${link.uid}-${index}`}>
                <a href={`/blog/${link.uid}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default BlogComponent;
