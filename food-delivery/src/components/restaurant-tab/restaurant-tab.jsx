import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/slice";
import { NavButton } from "../NavButton/navbutton";

export const RestaurantTab = ({ id, to }) => {
  const restaurant =
    useSelector((state) => selectRestaurantById(state, id)) || {};

  const { name } = restaurant;
  return <NavButton to={to} name={name} />;
};
