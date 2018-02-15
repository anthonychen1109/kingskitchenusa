import React from 'react';

const fried = [
  {
    itemCH: "",
    itemEN: "Beef Chow Fun (Dry Style)",
    price: "10.95"
  },
  {
    itemCH: "",
    itemEN: "Chicken Chow Fun (Dry Style)",
    price: "10.95"
  },
  {
    itemCH: "",
    itemEN: "Beef Chow Fun (Gravy)",
    price: "10.95"
  },
  {
    itemCH: "",
    itemEN: "Beef w. Bitter Melon Chow Fun",
    price: "11.95"
  },
  {
    itemCH: "",
    itemEN: "Stir Fried Kway Teow",
    price: "10.95"
  },
  {
    itemCH: "",
    itemEN: "Amoy Style Mei Fun",
    price: "10.95"
  },
  {
    itemCH: "",
    itemEN: "Singapore Style Curry Mei Fun",
    price: "10.95"
  },
  {
    itemCH: "",
    itemEN: "Tai Peng Style Mei Fun",
    price: "12.95"
  },
  {
    itemCH: "",
    itemEN: "Roasted Pork Fried Noodles",
    price: "9.95"
  },
  {
    itemCH: "",
    itemEN: "Beef Fried Noodles",
    price: "10.95"
  },
  {
    itemCH: "",
    itemEN: "Soy Sauce Fried Noodle",
    price: "8.95"
  },
  {
    itemCH: "",
    itemEN: "Any Style Lai Fun Noodle (Roasted Pork/Chicken/Beef)",
    price: "10.95"
  },
  {
    itemCH: "",
    itemEN: "Stir Fried Instant Noodle w. XO Sauce",
    price: "9.95"
  },
  {
    itemCH: "",
    itemEN: "Rice Noodle Rolls w. Sauce",
    price: "9.95"
  },
  {
    itemCH: "",
    itemEN: "Yong Chow Fried Rice",
    price: "9.95"
  },
  {
    itemCH: "",
    itemEN: "Beef Fried Rice",
    price: "9.95"
  },
  {
    itemCH: "",
    itemEN: "Taiwan Braised Pork on Rice",
    price: "6.95"
  },
  {
    itemCH: "",
    itemEN: "Stir Fried Vegetables w. Garlic Mince",
    price: "9.95"
  },
  {
    itemCH: "",
    itemEN: "Beef Bitter Melon Black Bean Sauce",
    price: "12.95"
  },
  {
    itemCH: "",
    itemEN: "Beef Bitter Melon Black Bean Sauce on Rice",
    price: "6.50"
  },
]

const Fried = () => {
  return (
    <div>
      <h1 className="item-header">Fried Fun/Noodle/Rice</h1>
      {fried.map((item, index) => {
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

export default Fried;
