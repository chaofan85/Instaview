# Instaview   

 [![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)  [![forthebadge](http://forthebadge.com/images/badges/makes-people-smile.svg)](http://forthebadge.com)

<img src="https://github.com/chaofan85/Instaview/blob/master/docs/instaview.png?raw=true" width="150">

[Instaview Link](https://instaview-app.herokuapp.com/)

Instaview, an Instagram clone, is a social media application that allows users to share their photos, like other users' photos, make comments and follow the users that they are interested in.


## Technology
* Back-End Language and Tools: Ruby on Rails, PostgreSQL

  <img src="https://github.com/chaofan85/Instaview/blob/master/docs/rails-logo.png?raw=true" width="50">  <img src="https://github.com/chaofan85/Instaview/blob/master/docs/postgresql-logo.png?raw=true" height="50">

* Front-End Language and Libraries: HTML, CSS, ReactJS/Redux, jQuery

  <img src="https://github.com/chaofan85/Instaview/blob/master/docs/HTML5_Logo.png?raw=true" width="50">  <img src="https://github.com/chaofan85/Instaview/blob/master/docs/css3.png?raw=true" height="50">  <img src="https://github.com/chaofan85/Instaview/blob/master/docs/react.png?raw=true" width="50">  <img src="https://github.com/chaofan85/Instaview/blob/master/docs/redux.png?raw=true" width="50">  <img src="https://github.com/chaofan85/Instaview/blob/master/docs/jquery_logo.png?raw=true" width="50">

* Other Libraries and Tools
  * BCrypt
  * Jbuilder
  * paperclip
  * react-router
  * lodash
  * Webpack
  * AWS


## Features
* Allows users to upload photos to their feed page. Users can choose photos from their machines, and they can add location and caption for the photo. After users submit, the photo will be uploaded to the server and showed on their feed page.


![screenshot1](https://github.com/chaofan85/Instaview/blob/master/docs/screenshot1.png?raw=true)


* Allows uses to follow other users, and their feed page will show the photos from the people they are following.


![screenshot2](https://github.com/chaofan85/Instaview/blob/master/docs/screenshot2.png?raw=true)


* Allows users to like photos (even their own photos). And they can also write comments under the photo, the comment will show up immediately after the user submits.


![screenshot3](https://github.com/chaofan85/Instaview/blob/master/docs/screenshot3.png?raw=true)

## Code Example

### Open/Close Modal

In this project, modals are used in many places, such as photo uploading, user avatar uploading and logout session. To make it simple, I used React to create modal component, which can be reused in different situations. The modal component is not involved in any redux cycle, only the component state indicates that whether the modal should be rendered or not.

```js
// frontend/components/photo/upload/photo_upload.jsx

class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { renderUpload: false };
    //if renderUpload is false, modal will not be rendered
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ renderUpload: true });
  }

  closeModal() {
    this.setState({ renderUpload: false });
  }

  render() {
    return (
      <div className="photo-upload">
        <button className='new-photo-button'
          onClick={this.openModal}>+</button>
          //clicking upload button will trigger openModal()
        { this.state.renderUpload ? (
          <div className='upload-panel'>
            <div className='modal-form'>
              <Some other component />
              <span className="modal-close"
                onClick={this.closeModal}>&times;</span>
                //clicking 'X' will trigger closeModal()
            </div>
            <div className="modal-bg"></div>
            // this is the background outside the modal
          </div>) : null }

      </div>
    );
  }
}

```


## The biggest lesson that I learned

This is my first React/Redux project. The biggest lesson I have learned is that keeping the state shape flat is very important in React/Redux project. Many nested states will easily cause errors. For example, in Instaview project, current user has many feeds, each feed has many comments, each comment also has many information. If these states are all nested in the user state, the state shape will become very clumsy. So we need to separated these information from their parents, like this:

```js
{
  entities: {
    user: {
      id: 1,
      feedIds: [2, 4, 7],
    },
    feed: {
      2: {
        id: 1,
        commentIds: [3, 6, 10],
      }
    },
    comments: {
      3: {
        id: 3,
        body: "nice picture!"
      }
    }
  }
}

```

Keeping state shape flat will allow us to fetch and update data easily. To do that, we need to use reducers to separate the information we fetched from the database. For example, if we don't want the `photos` state to be nested under the `user` state, in `users`'s view, we don't need to list all the photos and their information, we can just have an array of `photo_ids` or `feed_ids`.
```js
json.photo_ids user.photo_ids
json.feed_ids user.feed_ids
```

After we request the current user's information and dispatch the action, the `currentUser` state will only have `photo_ids`, instead of the big nested photos object. Then we can use these ids to fetch photos and comments.

## Future Features
* Photo's show page
* Notification
* Photo deletion
