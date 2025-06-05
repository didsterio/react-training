import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar } from "../progressbar/progressbar";
import styles from "./layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <ProgressBar />
      <Header text={"Food delivery"} />
      {children}
      <Footer />
    </div>
  );
};
