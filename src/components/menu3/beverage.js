import React from 'react';

const beverages = [
  {
    itemCH: "",
    itemEN: "",
    itemHot: "Hot",
    itemSmall: "Small",
    itemMedium: "Medium",
    itemCold: "Cold"
  },
  {
    itemCH: "",
    itemEN: "Coffee",
    itemHot: "-",
    itemSmall: "1.50",
    itemMedium: "1.95",
    itemCold: "-"
  },
  {
    itemCH: "",
    itemEN: "Tea with Milk",
    itemHot: "-",
    itemSmall: "1.50",
    itemMedium: "1.95",
    itemCold: "-"
  },
  {
    itemCH: "",
    itemEN: "Ovaltine",
    itemHot: "-",
    itemSmall: "-",
    itemMedium: "-",
    itemCold: "2.50"
  },
  {
    itemCH: "",
    itemEN: "Lemon Tea",
    itemHot: "-",
    itemSmall: "-",
    itemMedium: "-",
    itemCold: "1.25"
  },
  {
    itemCH: "",
    itemEN: "Prunella",
    itemHot: "-",
    itemSmall: "-",
    itemMedium: "-",
    itemCold: "1.95"
  },
  {
    itemCH: "",
    itemEN: "Pomelo Honey",
    itemHot: "1.50",
    itemSmall: "-",
    itemMedium: "-",
    itemCold: "2.50"
  },
  {
    itemCH: "",
    itemEN: "Ginger w. Honey",
    itemHot: "1.50",
    itemSmall: "-",
    itemMedium: "-",
    itemCold: "2.50"
  },
  {
    itemCH: "",
    itemEN: "Red Dates w. Honey",
    itemHot: "1.50",
    itemSmall: "-",
    itemMedium: "-",
    itemCold: "2.50"
  },
  {
    itemCH: "",
    itemEN: "Iced Lemon & Honey",
    itemHot: "-",
    itemSmall: "-",
    itemMedium: "-",
    itemCold: "2.50"
  },
  {
    itemCH: "",
    itemEN: "Iced Lemon Tea",
    itemHot: "-",
    itemSmall: "-",
    itemMedium: "-",
    itemCold: "2.50"
  },
  {
    itemCH: "",
    itemEN: "Ice Tea with Milk",
    itemHot: "-",
    itemSmall: "-",
    itemMedium: "-",
    itemCold: "2.50"
  },
  {
    itemCH: "",
    itemEN: "Ice Coffee",
    itemHot: "-",
    itemSmall: "-",
    itemMedium: "-",
    itemCold: "2.50"
  }
]

const Beverage = () => {
  return (
    <div>
      <h1 className="item-header">Beverages</h1>
      {beverages.map((item, index) => {
        return (
          <div key={item+index} className="item-grid-drink-2 animated fadeIn">
            <div>{item.itemEN}</div>
            <div>{item.itemHot}</div>
            <div>{item.itemSmall}</div>
            <div>{item.itemMedium}</div>
            <div>{item.itemCold}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Beverage;
