import React from 'react';

const noodles = [
  {
    itemCH: "",
    itemEN: "Wonton Noodle in Soup",
    price: "5.50"
  },
  {
    itemCH: "",
    itemEN: "Dumpling Noodle in Soup",
    price: "5.50"
  },
  {
    itemCH: "",
    itemEN: "Fish Paste Noodle in Soup",
    price: "5.50"
  },
  {
    itemCH: "",
    itemEN: "Beef Navel Noodle in Soup",
    price: "6.50"
  },
  {
    itemCH: "",
    itemEN: "Fish Ball Noodle in Soup",
    price: "5.25"
  },
  {
    itemCH: "",
    itemEN: "Soy Sauce Chicken Noodle in Soup",
    price: "6.50"
  },
  {
    itemCH: "",
    itemEN: "Roasted Duck Noodle in Soup",
    price: "6.50"
  },

  {
    itemCH: "",
    itemEN: "Roasted Pork Noodle in Soup",
    price: "6.50"
  },
  {
    itemCH: "",
    itemEN: "Fish Paste Noodle",
    price: "6.95"
  },
  {
    itemCH: "",
    itemEN: "Wonton in Soup",
    price: "6.25"
  },
  {
    itemCH: "",
    itemEN: "Dumpling in Soup",
    price: "6.25"
  },
  {
    itemCH: "",
    itemEN: "Fish Paste in Soup",
    price: "6.25"
  },
  {
    itemCH: "",
    itemEN: "Fish Dumpling in Soup",
    price: "7.25"
  },
  {
    itemCH: "",
    itemEN: "Glutinous Rice Balls in Soup",
    price: "7.00"
  }
]

const Noodle = () => {
  return (
    <div>
      <h1 className="item-header">Noodle in Soup</h1>
      {noodles.map((item, index) => {
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

export default Noodle;
