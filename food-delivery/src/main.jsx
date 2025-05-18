import { createRoot } from "react-dom/client";
import { restaurants } from "./mock";

const root = document.getElementById("root");
const reactRoot = createRoot(root);

reactRoot.render(
  <div>
    {restaurants.map((restaurant) => (
      <div key={restaurant.id}>
        <h2 key={restaurant.id}>{restaurant.name}</h2>
        <h3>Menu</h3>
        <ul className="someClass">
          {restaurant.menu.map((dish) => (
            <li key={dish.id}>
              {dish.name +
                " (" +
                dish.ingredients +
                ")" +
                " - " +
                dish.price +
                "$"}
            </li>
          ))}
        </ul>
        <h3>Reviews</h3>
        <ul className="someClass">
          {restaurant.reviews.map((review) => (
            <li key={review.id}>
              {review.user + ": '" + review.text + "'. Rate - " + review.rating}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
