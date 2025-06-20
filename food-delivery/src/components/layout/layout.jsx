import { Outlet } from "react-router";
import { Button } from "../button/button";
import { Cart } from "../cart/cart";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar } from "../progressbar/progressbar";
import styles from "./layout.module.css";

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <ProgressBar />
      <Header text={"Food delivery"} />
      <Outlet />

      <Cart />
      <Footer />
    </div>
  );
};
