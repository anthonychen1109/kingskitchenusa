import React from 'react';

const specials = [
  {
    itemCH: "",
    itemEN: "Summer Truffle County Chicken",
    price: "17.95"
  },
  {
    itemCH: "",
    itemEN: "Dongpo's Pork",
    price: "13.95"
  },
  {
    itemCH: "",
    itemEN: "Red Wine Black Pepper Shredded Beef",
    price: "17.95"
  },
  {
    itemCH: "",
    itemEN: "Taiwan Braised Pork on Rice",
    price: "6.95"
  }
]

const Special = () => {
  return (
    <div>
      <h1 className="item-header">Chef Special</h1>
      {specials.map((item, index) => {
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

export default Special;
