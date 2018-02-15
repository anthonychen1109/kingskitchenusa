import React, { Component } from 'react';

// Components
import Special from './special';
import Congee from './congee';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: ''
    };
    this.setItem = this.setItem.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  setItem(item) {
    this.setState({ currentItem: item})
  }

  renderItem(item) {
    switch(item) {
      case 'special':
        return <Special />
      case 'congee':
        return <Congee />
      default:
        return <Special />
    }
  }

  render() {
    return (
      <div className="menu container">
        <div className="menu-container">
          <div className="menu-nav">
            <h1>Menu</h1>
            <ul>
              <li onClick={() => this.setItem('special')}>Chef Special</li>
              <li onClick={() => this.setItem('congee')}>Congee</li>
              <li>Fried Fun/Noodle/Rice</li>
              <li>Noodle in Soup</li>
              <li>Roasted Meat on Rice</li>
              <li>Appetizers</li>
              <li>Beverages</li>
              <li>Steamed Rice Rolls</li>
              <li>Rice Casserole</li>
            </ul>
          </div>
          <div className="menu-display">
            {this.renderItem(this.state.currentItem)}
          </div>
        </div>
      </div>
    )
  }
}

export default Menu;
