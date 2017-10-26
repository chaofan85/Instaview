import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <nav>
          <div className="logo">
            <div className='header-bg-logo'></div>
            <div className='header-logo'>Instaview</div>
          </div>

          <div className="search-area">
            <input className='search-bar' type='text'/>
            <div>
              <span className='search-icon'></span>
              <span className='search-text'>Search</span>
            </div>
          </div>

          <div className='header-icons'>
             <span className='explore-icon'></span>
             <span className='notification-icon'></span>
             <span className='profile-icon'></span>
          </div>

          {/*<button onClick={this.props.logout}>logout</button>*/}
        </nav>
      </header>
    );
  }
}

export default Header;
