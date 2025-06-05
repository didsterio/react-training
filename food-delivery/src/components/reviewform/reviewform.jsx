import { useForm } from "./useform";
import { Counter } from "../counter/counter";
import styles from "./reviewForm.module.css";

export const ReviewForm = () => {
  const {
    state,
    onUserChange,
    onTextChange,
    onIncrementRating,
    onDecrementRating,
    resetForm,
  } = useForm();

  const { user, text, rating } = state;

  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>REVIEW FORM</div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <label style={{ width: "100px", marginRight: "10px" }}>Имя:</label>
        <input
          type="text"
          placeholder="Имя"
          value={user}
          onChange={(event) => {
            onUserChange(event.target.value);
          }}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <label style={{ width: "100px", marginRight: "10px" }}>Текст:</label>
        <input
          type="text"
          placeholder="Текст"
          value={text}
          onChange={(event) => {
            onTextChange(event.target.value);
          }}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <label style={{ width: "100px", marginRight: "10px" }}>Рейтинг:</label>
        <Counter
          value={rating}
          decrement={onDecrementRating}
          increment={onIncrementRating}
        />
      </div>
      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <button
          onClick={resetForm}
          style={{
            padding: "10px 15px",
            backgroundColor: "#ff4444",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.2s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#cc0000")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#ff4444")
          }
        >
          Сбросить форму
        </button>
      </div>
    </div>
  );
};
