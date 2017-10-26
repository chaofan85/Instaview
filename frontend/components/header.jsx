import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <div className='herder-bg-top'></div>
        <button onClick={this.props.logout}>logout</button>
      </header>
    );
  }
}

export default Header;
