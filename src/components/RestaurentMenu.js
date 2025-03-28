import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurentMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchResMenu();
  }, []);

  const params = useParams();

  const fetchResMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=" +
        params.id
    );
    const json = await data.json();
    setResInfo(json.data);
  };
  console.log(resInfo?.cards[2]?.card?.card?.info);
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};

  console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <h3>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </h3>
      <ul>
        {itemCards?.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} -{" Rs."}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
