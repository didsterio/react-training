export const Header = ({ text }) => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "center", // горизонтальное выравнивание
        alignItems: "center", // вертикальное выравнивание
        height: "80px",
        background: "#f0f0f0",
        border: "1px solid black",
      }}
    >
      {text}
    </header>
  );
};
