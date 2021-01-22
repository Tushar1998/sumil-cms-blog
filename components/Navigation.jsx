import styles from "../styles/Navigation.module.scss";

const Navigation = (props) => {
  // const { src, width, height } = props.logo;

  const data = props.data[0];
  const width = 200;
  const height = 100;

  return (
    <div className={styles["navigation-sec"]}>
      <div className="img-logo">
        <img src={data.file.url} alt="logo" width={width} height={height} />
      </div>

      <nav className={styles["navigation-tab"]}>
        <ul>
          <li className={styles["nav-item"]}>
            <a href={data.group.link.href}> {data.group.link.title}</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
