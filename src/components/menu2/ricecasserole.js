import React from 'react';

const ricecasserole = [
  {
    itemCH: "",
    itemEN: "Preserved Meat",
    price: "7.50"
  },
  {
    itemCH: "",
    itemEN: "Taro with Preserved Meat",
    price: "7.75"
  },
  {
    itemCH: "",
    itemEN: "Poached Egg with Minced Meat",
    price: "7.25"
  },
  {
    itemCH: "",
    itemEN: "Spare Ribs w. Black Bean Sauce",
    price: "7.50"
  },
  {
    itemCH: "",
    itemEN: "Frog",
    price: "9.50"
  },
  {
    itemCH: "",
    itemEN: "Chicken",
    price: "7.50"
  },
  {
    itemCH: "",
    itemEN: "Salted Chicken",
    price: "7.50"
  },
  {
    itemCH: "",
    itemEN: "Yellow Eel",
    price: "9.50"
  },
  {
    itemCH: "",
    itemEN: "Eel",
    price: "10.00"
  },
  {
    itemCH: "",
    itemEN: "Poached Egg with Beef",
    price: "7.50"
  },
  {
    itemCH: "",
    itemEN: "Preserved Vegetable with Minced Meat",
    price: "7.25"
  },
  {
    itemCH: "",
    itemEN: "Preserved Duck",
    price: "8.50"
  },
  {
    itemCH: "",
    itemEN: "Salted Fish and Minced Meat",
    price: "7.25"
  },
  {
    itemCH: "",
    itemEN: "Pork Knuckle",
    price: "7.25"
  },
  {
    itemCH: "",
    itemEN: "Beef Navel",
    price: "7.75"
  },
  {
    itemCH: "",
    itemEN: "Bry Turnip Root",
    price: "7.25"
  },
  {
    itemCH: "",
    itemEN: "Special Combo",
    price: "9.75"
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
