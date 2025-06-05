import styles from "./header.module.css";

export const Header = ({ text }) => {
  return <header className={styles.header}>{text}</header>;
};
