import "./Progressbar.css";
import { useProgress } from "./useprogress";

export const ProgressBar = () => {
  const value = useProgress();
  return <div className="progress-bar" style={{ width: value }}></div>;
};
