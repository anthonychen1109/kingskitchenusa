import React from 'react';

const ricerolls = [
  {
    itemCH: "",
    itemEN: "Rice Noodle Rolls w. Dried Shrimp",
    price: "3.25"
  },
  {
    itemCH: "",
    itemEN: "Rice Noodle Rolls w. Shrimp",
    price: "3.50"
  },
  {
    itemCH: "",
    itemEN: "Rice Noodle Rolls w. Beef",
    price: "3.25"
  },
  {
    itemCH: "",
    itemEN: "Rice Noodle Rolls w. Fried Fritter",
    price: "3.00"
  },
  {
    itemCH: "",
    itemEN: "Rice Noodle Rolls w. Parsley",
    price: "3.00"
  },
  {
    itemCH: "",
    itemEN: "Rice Noodle Rolls w. Fish Paste",
    price: "3.50"
  },
  {
    itemCH: "",
    itemEN: "Rice Noodle Rolls w. Fish Slices",
    price: "3.50"
  },
  {
    itemCH: "",
    itemEN: "Rice Noodle Rolls w. Shumai",
    price: "3.50"
  },
  {
    itemCH: "",
    itemEN: "Plain Rice Noodle Rolls",
    price: "3.00"
  },
  {
    itemCH: "",
    itemEN: "Fried Fritter Rice Noodle Rolls w. Beef",
    price: "3.75"
  },
  {
    itemCH: "",
    itemEN: "Fried Fritter Noodle Rolls w. Fish",
    price: "3.75"
  },
  {
    itemCH: "",
    itemEN: "Fried Fritter Rice w. Shumai",
    price: "3.75"
  },
  {
    itemCH: "",
    itemEN: "Rice Noodle Rolls w. Bitter Melon & Beef",
    price: "3.50"
  },
  {
    itemCH: "",
    itemEN: "Rice Noodle Rolls w. Preserved Egg & Lettuce",
    price: "3.50"
  },
  {
    itemCH: "",
    itemEN: "Rice Noodle Rolls w. Egg & Lettuce",
    price: "3.50"
  },
  {
    itemCH: "",
    itemEN: "Rice Noodle Rolls w. Beef Navel",
    price: "5.95"
  },
  {
    itemCH: "",
    itemEN: "Rice Noodle Rolls w. Roast Pork",
    price: "3.50"
  },
  {
    itemCH: "",
    itemEN: "Rice Noodle Rolls w. Pork & Preserved Vegetable",
    price: "3.50"
  },
  {
    itemCH: "",
    itemEN: "Vegetables Rice Noodle Roll",
    price: "3.25"
  },
  {
    itemCH: "",
    itemEN: "Crispy Vegetables Rice Noodle Roll",
    price: "3.75"
  },
  {
    itemCH: "",
    itemEN: "Pig Liver Rice Noodle Roll",
    price: "3.50"
  },
  {
    itemCH: "",
    itemEN: "Shredded Duck Rice Noodle Roll",
    price: "3.95"
  }
]

const Riceroll = () => {
  return (
    <div>
      <h1 className="item-header">Steamed Rice Rolls</h1>
      {ricerolls.map((item, index) => {
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

export default Riceroll;
