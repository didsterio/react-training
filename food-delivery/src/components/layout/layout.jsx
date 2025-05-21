import { Footer } from "../footer/footer";
import { Header } from "../header/header";

export const Layout = ({ children }) => {
  return (
    <div className="layout" style={{ padding: "10px" }}>
      <Header text={"Food delivery"} />
      {children}
      <Footer />
    </div>
  );
};
