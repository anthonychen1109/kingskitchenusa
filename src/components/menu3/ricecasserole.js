import React from 'react';

const ricecasserole = [
  {
    itemCH: "",
    itemEN: "Preserved Meat",
    price: "6.50"
  },
  {
    itemCH: "",
    itemEN: "Taro with Preserved Meat",
    price: "6.95"
  },
  {
    itemCH: "",
    itemEN: "Poached Egg with Minced Meat",
    price: "6.95"
  },
  {
    itemCH: "",
    itemEN: "Spare Ribs w. Black Bean Sauce",
    price: "6.50"
  },
  {
    itemCH: "",
    itemEN: "Frog",
    price: "8.25"
  },
  {
    itemCH: "",
    itemEN: "Chicken",
    price: "6.50"
  },
  {
    itemCH: "",
    itemEN: "Salted Chicken",
    price: "6.50"
  },
  {
    itemCH: "",
    itemEN: "Yellow Eel",
    price: "8.25"
  },
  {
    itemCH: "",
    itemEN: "Eel",
    price: "7.95"
  },
  {
    itemCH: "",
    itemEN: "Poached Egg with Beef",
    price: "6.95"
  },
  {
    itemCH: "",
    itemEN: "Preserved Vegetable with Minced Meat",
    price: "6.95"
  },
  {
    itemCH: "",
    itemEN: "Preserved Duck",
    price: "7.95"
  },
  {
    itemCH: "",
    itemEN: "Salted Fish and Minced Meat",
    price: "6.95"
  },
  {
    itemCH: "",
    itemEN: "Pork Knuckle",
    price: "6.50"
  },
  {
    itemCH: "",
    itemEN: "Beef Navel",
    price: "6.95"
  },
  {
    itemCH: "",
    itemEN: "Quail",
    price: "7.95"
  },
  {
    itemCH: "",
    itemEN: "Special Combo",
    price: "8.95"
  }
]

const Ricecasserole = () => {
  return (
    <div>
      <h1 className="item-header">Rice Casserole</h1>
      {ricecasserole.map((item, index) => {
        return (
          <div key={item+index} className="item-grid animated fadeIn">
            <div>{item.itemEN}</div>
            <div className="item-price">{item.price}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Ricecasserole;
