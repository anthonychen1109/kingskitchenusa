import React from 'react';

const appetizers = [
  {
    itemCH: "",
    itemEN: "Two Choices of BBQ",
    price: "6.50"
  },
  {
    itemCH: "",
    itemEN: "Three choices of BBQ",
    price: "7.50"
  },
  {
    itemCH: "",
    itemEN: "Four Choices of BBQ",
    price: "8.50"
  },
  {
    itemCH: "",
    itemEN: "Cuttlefish in Chinese Marinade",
    price: "8.50"
  },
  {
    itemCH: "",
    itemEN: "Fried Wonton",
    price: "5.50"
  },
  {
    itemCH: "",
    itemEN: "Fried Chicken Wings",
    price: "5.50"
  },
  {
    itemCH: "",
    itemEN: "Vegetable w. Oyster Sauce",
    price: "6.95"
  },
  {
    itemCH: "",
    itemEN: "Chicken Wings in Chinese Marinade",
    price: "6.95"
  }
]

const Appetizer = () => {
  return (
    <div>
      <h1 className="item-header">Appetizers</h1>
      {appetizers.map((item, index) => {
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

export default Appetizer;
