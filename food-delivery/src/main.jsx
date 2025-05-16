// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
import { createRoot } from "react-dom/client";
import { restaurants } from "./mock";

const root = document.getElementById("root");
const reactRoot = createRoot(root);

reactRoot.render(
  <div>
    {restaurants.map((restaurantElmnt) => (
      <div key={restaurantElmnt.id}>
        <h2 key={restaurantElmnt.id}>{restaurantElmnt.name}</h2>
        <h3>Menu</h3>
        <ul className="someClass">
          {restaurantElmnt.menu.map((menuElmnt) => (
            <li key={menuElmnt.id}>
              {menuElmnt.name +
                " (" +
                menuElmnt.ingredients +
                ")" +
                " - " +
                menuElmnt.price +
                "$"}
            </li>
          ))}
        </ul>
        <h3>Reviews</h3>
        <ul className="someClass">
          {restaurantElmnt.reviews.map((reviewElmnt) => (
            <li key={reviewElmnt.id}>
              {reviewElmnt.user +
                ": '" +
                reviewElmnt.text +
                "'. Rate - " +
                reviewElmnt.rating}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

console.log(reactRoot);

{
  /* <h3>Menu</h3>
{rElement.menu.map((mElement) => (
  <li key={mElement.id}>{mElement.name}</li>
))} */
}
