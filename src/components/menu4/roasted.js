import React from 'react';

const roasted = [
  {
    itemCH: "",
    itemEN: "3 Choices BBQ Combination on Rice",
    price: "6.50"
  },
  {
    itemCH: "",
    itemEN: "Two Choices of BBQ on Rice",
    price: "6.00"
  },
  {
    itemCH: "",
    itemEN: "Soy Sauce Chicken on Rice",
    price: "5.00"
  },
  {
    itemCH: "",
    itemEN: "Roasted Pork on Rice",
    price: "5.00"
  },
  {
    itemCH: "",
    itemEN: "Roasted Pig on Rice",
    price: "5.00"
  },
  {
    itemCH: "",
    itemEN: "Roasted Duck on Rice",
    price: "5.00"
  },
  {
    itemCH: "",
    itemEN: "Cuttlefish on Rice",
    price: "6.00"
  }
]

const Roasted = () => {
  return (
    <div>
      <h1 className="item-header">Roasted Meat on Rice</h1>
      {roasted.map((item, index) => {
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

export default Roasted;
