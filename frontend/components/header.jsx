import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const username = this.props.currentUser.username;
    return (
      <header>
        <nav>
          <Link to='/'>
            <div className="logo">
              <div className='header-bg-logo'></div>
              <div className='header-logo'>Instaview</div>
            </div>
          </Link>

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
             <Link to={`/${username}`}>
               <span className='profile-icon'></span>
             </Link>
          </div>

          {/*<button onClick={this.props.logout}>logout</button>*/}
        </nav>
      </header>
    );
  }
}

export default Header;
