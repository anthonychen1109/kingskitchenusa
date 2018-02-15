import React from 'react';

const congee = [
  {
    itemCH: "",
    itemEN: "Congee with Beef",
    price: "4.75"
  },
  {
    itemCH: "",
    itemEN: "Congee with Fish Paste",
    price: "4.75"
  },
  {
    itemCH: "",
    itemEN: "Congee with Ground Beef",
    price: "4.75"
  },
  {
    itemCH: "",
    itemEN: "Congee with Chicken",
    price: "4.75"
  },
  {
    itemCH: "",
    itemEN: "Congee with Fish Slices",
    price: "4.75"
  },
  {
    itemCH: "",
    itemEN: "Congee with Pork Liver",
    price: "4.75"
  },
  {
    itemCH: "",
    itemEN: "Congee with Meat Balls",
    price: "4.75"
  },
  {
    itemCH: "",
    itemEN: "Congee with Dry Squids & Jelly Fish",
    price: "5.25"
  },
  {
    itemCH: "",
    itemEN: "Congee with Frog",
    price: "6.50"
  },
  {
    itemCH: "",
    itemEN: "Congee with Seafood",
    price: "6.50"
  },
  {
    itemCH: "",
    itemEN: "Congee with Pork & Preserved Egg",
    price: "4.50"
  }
]

const Congee = () => {
  return (
    <div>
      <h1 className="item-header">Congee</h1>
      {congee.map((item, index) => {
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

export default Congee;
