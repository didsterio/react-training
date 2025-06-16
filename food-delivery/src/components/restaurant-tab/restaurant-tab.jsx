import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/slice";
import Button from "../button/button";

export const RestaurantTab = ({ id, onClick }) => {
  const restaurant =
    useSelector((state) => selectRestaurantById(state, id)) || {};

  const { name } = restaurant;

  return <Button onClick={onClick} text={name} />;
};
