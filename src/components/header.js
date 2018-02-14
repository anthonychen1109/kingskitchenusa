import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {
    let divStyle = {
      backgroundImage: "url(" + this.props.headerImage + ")",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "100vh"
    };
    return (
      <div className="header">
        <div style={divStyle}>
          <div className="darken">
          <div className="header-logo">
            <h1>King's Kitchen</h1>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Header;
