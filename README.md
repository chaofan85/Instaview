# Instaview
[![forthebadge](http://forthebadge.com/images/badges/made-with-ruby.svg)](http://forthebadge.com)

Instaview, an Instagram clone, is a social media application that allows users to share their photos, like other users' photos, make comments and follow the users that they are interested in.

[Instaview Link](https://instaview-app.herokuapp.com/)

## Technology
* Back-End Language: Ruby on Rails
* Front-End Language: ReactJS/Redux, jQuery

## Features
* Users can upload photos on their feed page, they can choose photos from their machines. They can add location and caption for the photo. After they submit, the photo will be uploaded to the server and showed on their feed page.


![screenshot1](https://github.com/chaofan85/Instaview/blob/master/docs/screenshot1.png?raw=true)


* Users can follow other users, and their feed page will show the photos from the people they are following.


![screenshot2](https://github.com/chaofan85/Instaview/blob/master/docs/screenshot2.png?raw=true)


* Users can like photos (even their own photos). And they can also leave comments under the photo, the comment will show up immediately after the user submits.


![screenshot3](https://github.com/chaofan85/Instaview/blob/master/docs/screenshot3.png?raw=true)

## Code Example

Keeping the state shape flat is very important in React/Redux project. Many nested states will easily cause errors. For example, in this project, current user has many feeds, each feed has many comments, each comment also has information. If these state are all nested in the user state, the state shape will become very clumsy. So we need to separated these information from their parents, like this:

```js
{
  entities: {
    user: {
      id: 1,
      feedIds: [2, 4, 7],
    },
    photos: {
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

Keeping state shape flat can allow us to fetch and update data easily.
