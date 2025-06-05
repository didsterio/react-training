import styles from "./progressbar.module.css";
import { useProgress } from "./useprogress";

export const ProgressBar = () => {
  const value = useProgress();
  return <div className={styles.progressbarv} style={{ width: value }}></div>;
};
