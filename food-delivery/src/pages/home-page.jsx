import { NavButton } from "../components/NavButton/navbutton";
import styles from "./page.module.css";

export const HomePage = () => {
  return (
    <div className={styles.restaurantHomePageMaincontainer}>
      <NavButton to={"/restaurants"} name={"Go to Restaurants"} />
    </div>
  );
};
