import React from "react";

function ListComponent(props) {
  const food = props.items;

  const FoodList = food.map((food) => (
    <div className="content-item" key={food.id}>
      <span>{food.type}</span>
      <h3>{food.name}</h3>
    </div>
  ));

  return <div className="grid">{FoodList}</div>;
}

export {ListComponent};
