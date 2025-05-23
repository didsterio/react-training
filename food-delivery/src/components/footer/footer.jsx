export const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "center", // горизонтальное выравнивание
        alignItems: "center", // вертикальное выравнивание
        height: "80px",
        background: "#f0f0f0",
        border: "1px solid black",
      }}
    >
      <div className="container">
        <p>© {new Date().getFullYear()} My React App. All rights reserved.</p>
        <p>Contact: info@myreactapp.com</p>
      </div>
    </footer>
  );
};
