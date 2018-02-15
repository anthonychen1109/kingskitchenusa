import React from 'react';

const beverages = [
  {
    itemCH: "",
    itemEN: "",
    itemSmall: "Small",
    itemMedium: "Medium",
    itemLarge: "Large"
  },
  {
    itemCH: "",
    itemEN: "Coffee",
    itemSmall: "1.50",
    itemMedium: "2.00",
    itemLarge: "2.50"
  },
  {
    itemCH: "",
    itemEN: "Tea with Milk",
    itemSmall: "1.50",
    itemMedium: "2.00",
    itemLarge: "2.50"
  },
  {
    itemCH: "",
    itemEN: "Lemon Tea",
    itemSmall: "1.50",
    itemMedium: "2.00",
    itemLarge: "2.50"
  },
  {
    itemCH: "",
    itemEN: "Lemon w. Honey",
    itemSmall: "1.50",
    itemMedium: "2.00",
    itemLarge: "2.50"
  },
  {
    itemCH: "",
    itemEN: "Pomelo Honey",
    itemSmall: "1.50",
    itemMedium: "2.00",
    itemLarge: "2.50"
  },
  {
    itemCH: "",
    itemEN: "Ginger w. Honey",
    itemSmall: "1.50",
    itemMedium: "2.00",
    itemLarge: "2.50"
  },
  {
    itemCH: "",
    itemEN: "Red Dates w. Honey",
    itemSmall: "1.50",
    itemMedium: "2.00",
    itemLarge: "2.50"
  },
  {
    itemCH: "",
    itemEN: "7-up w. Lemon",
    itemSmall: "-",
    itemMedium: "-",
    itemLarge: "2.50"
  },
  {
    itemCH: "",
    itemEN: "Coca Cola w. Lemon",
    itemSmall: "-",
    itemMedium: "-",
    itemLarge: "2.50"
  },
  {
    itemCH: "",
    itemEN: "Prunella",
    itemSmall: "-",
    itemMedium: "-",
    itemLarge: "2.00"
  }
]

const Beverage = () => {
  return (
    <div>
      <h1 className="item-header">Beverages</h1>
      {beverages.map((item, index) => {
        return (
          <div key={item+index} className="item-grid-drink animated fadeIn">
            <div>{item.itemEN}</div>
            <div>{item.itemSmall}</div>
            <div>{item.itemMedium}</div>
            <div>{item.itemLarge}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Beverage;
