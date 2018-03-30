import React from 'react';
import { Link } from 'react-router-dom';

import PhotoUpload from './photo/upload/photo_upload';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let username;
    if (this.props.currentUser) {
      username = this.props.currentUser.username;
    }
    return (
      <header>
        <nav>
          <a href="/">
            <div className="logo">
              <div className='header-bg-logo'></div>
              <div className='header-logo'>Instaview</div>
            </div>
          </a>

          <div className='header-icons'>
             <PhotoUpload />
             <Link to={`/${username}`}>
               <span className='profile-icon'></span>
             </Link>
          </div>

        </nav>
      </header>
    );
  }
}

export default Header;
