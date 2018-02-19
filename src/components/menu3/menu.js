import React, { Component } from 'react';

// Components
import Special from './special';
import Congee from './congee';
import Fried from './fried';
import Noodle from './noodle';
import Roasted from './roasted';
import Appetizer from './appetizers';
import Beverage from './beverage';
import Riceroll from './riceroll';
import Ricecasserole from './ricecasserole';

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
      case 'fried':
        return <Fried />
      case 'noodle':
        return <Noodle />
      case 'roasted':
        return <Roasted />
      case 'appetizer':
        return <Appetizer />
      case 'beverage':
        return <Beverage />
      case 'riceroll':
        return <Riceroll />
      case 'ricecasserole':
        return <Ricecasserole />
      default:
        return <Special />
    }
  }

  render() {
    return (
      <div className="menu-bg">
      <div id="menu" className="menu container">
        <div className="menu-container">
          <div className="menu-nav">
            <h1>Menu</h1>
              <ul>
                <li onClick={() => this.setItem('special')}><span>Chef Special</span></li>
                <li onClick={() => this.setItem('congee')}><span>Congee</span></li>
                <li onClick={() => this.setItem('fried')}><span>Fried Fun/Noodle/Rice</span></li>
                <li onClick={() => this.setItem('noodle')}><span>Noodle in Soup</span></li>
                <li onClick={() => this.setItem('roasted')}><span>Roasted Meat on Rice</span></li>
                <li onClick={() => this.setItem('appetizer')}><span>Appetizers</span></li>
                <li onClick={() => this.setItem('beverage')}><span>Beverages</span></li>
                <li onClick={() => this.setItem('riceroll')}><span>Steamed Rice Rolls</span></li>
                <li onClick={() => this.setItem('ricecasserole')}><span>Rice Casserole</span></li>
              </ul>
          </div>
          <div className="menu-display">
            {this.renderItem(this.state.currentItem)}
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Menu;
