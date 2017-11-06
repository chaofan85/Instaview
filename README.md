# Instaview

<img src="https://github.com/chaofan85/Instaview/blob/master/docs/instaview-logo.png?raw=true" width="200">


Instaview, an Instagram clone, is a social media application that allows users to share their photos, like other users' photos, make comments and follow the users that they are interested in.

[Instaview Link](https://instaview-app.herokuapp.com/)

## Technology
* Back-End Language: Ruby on Rails

  <img src="https://github.com/chaofan85/Instaview/blob/master/docs/rails-logo.png?raw=true" width="50">

* Front-End Language: HTML, CSS, ReactJS/Redux, jQuery

  <img src="https://github.com/chaofan85/Instaview/blob/master/docs/HTML5_Logo.png?raw=true" width="50">  <img src="https://github.com/chaofan85/Instaview/blob/master/docs/css3.png?raw=true" height="50">  <img src="https://github.com/chaofan85/Instaview/blob/master/docs/react.png?raw=true" width="50">  <img src="https://github.com/chaofan85/Instaview/blob/master/docs/redux.png?raw=true" width="50">  <img src="https://github.com/chaofan85/Instaview/blob/master/docs/jquery_logo.png?raw=true" width="50">


## Features
* Allows users to upload photos on their feed page, they can choose photos from their machines. They can add location and caption for the photo. After they submit, the photo will be uploaded to the server and showed on their feed page.


![screenshot1](https://github.com/chaofan85/Instaview/blob/master/docs/screenshot1.png?raw=true)


* Allows uses to follow other users, and their feed page will show the photos from the people they are following.


![screenshot2](https://github.com/chaofan85/Instaview/blob/master/docs/screenshot2.png?raw=true)


* Allows users to like photos (even their own photos). And they can also leave comments under the photo, the comment will show up immediately after the user submits.


![screenshot3](https://github.com/chaofan85/Instaview/blob/master/docs/screenshot3.png?raw=true)

## Code Example

### Open/Close Modal

In this project, modals are used in many places, such as photo uploading, user avatar uploading and logout session. To make it simple, I used React to create modal component, which can be reused in different places. It's not involved in any redux cycle, only component state indicate that whether the modal should be rendered or not.

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

This is my first React/Redux project. The biggest lesson I have learned from this project is that keeping the state shape flat is very important in React/Redux project. Many nested states will easily cause errors. For example, in this project, current user has many feeds, each feed has many comments, each comment also has information. If these state are all nested in the user state, the state shape will become very clumsy. So we need to separated these information from their parents, like this:

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

Keeping state shape flat can allow us to fetch and update data easily. To do that, we need to use reducers to separate the information we fetched from the database. For example, if we don't want the `photos` state to be
nested under the `user` state, in `users`'s view, we don't need to list all the photos and their information, we can just have an array of `photo_ids` or `feed_ids`.
```js
json.photo_ids user.photo_ids
json.feed_ids user.feed_ids
```

After we request the current user's information and dispatch the action, the `currentUser` state will only have `photo_ids`, instead of the big nested photos object. Then we can use these ids to fetch photos and comments.
