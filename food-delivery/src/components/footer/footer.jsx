import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>© {new Date().getFullYear()} My React App. All rights reserved.</p>
        <p>Contact: info@myreactapp.com</p>
      </div>
    </footer>
  );
};
