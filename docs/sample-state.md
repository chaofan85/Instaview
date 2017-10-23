# Sample State

```js
{
  entities: {
    photos: {
      1: {
        id: 1,
        image_url: "/assets/images/pics/134534567456235.jpg",
        caption: "A picture of my cute dog!",
        location: "New York City",
        author_id: 30,
        likes: 7,
        liker_ids: [2, 7, 14, 64, 68, 102, 51],
        comment_ids: [125, 436, 567, 768, 819, 1024],
        liked_by_current_user: true,
        upload_time: "2017-10-16T17:22:23.391Z"
      },
      2: {
        id: 2,
        image_url: "/assets/images/pics/235324357456235.jpg",
        caption: "Sunset from Hawaii!",
        location: "Kailua, Hawaii",
        author_id: 10,
        likes: 9,
        liker_ids: [25, 37, 44, 69, 98, 107, 251, 360, 400],
        comment_ids: [154, 236, 467, 668, 719, 1424],
        liked_by_current_user: true,
        upload_time: "2017-10-19T03:22:23.391Z"
      }
    },
    users: {
      5: {
        id: 5,
        username: "Newyorker",
        full_name: "John Jackson",
        email: "jjack@gmail.com",
        image_url: "/assets/images/profiles/12453.jpg",
        follower_ids: [12, 43, 54, 78, 231],
        following_ids: [21, 53, 65, 87, 143],
        followed_by_current_user: false,
        password_digest: "34gERG34gERHJ344534SDFG",
        session_token: "h452gRAS42h5w73g"
      },
      7: {
        id: 7,
        username: "catlover",
        full_name: "Cindy Lin",
        email: "cindy938@gmail.com",
        image_url: "/assets/images/profiles/25123.jpg",
        follower_ids: [23, 44, 64, 88, 151],
        following_ids: [21, 35, 45, 77, 193],
        followed_by_current_user: true,
        password_digest: "AS34534ADSGgADSF3fgs343",
        session_token: "a4hA32shD426Fhw6"
      }
    },
    likes: {
      45: {
        id: 45,
        photo_id: 125,
        liker_id: 66
      },
      56: {
        id: 56,
        photo_id: 236,
        liker_id: 12
      }
    },
    follows: {
      88: {
        id: 88,
        follower_id: 436,
        followee_id: 128
      },
      315: {
        id: 315,
        follower_id: 76,
        followee_id: 186
      }
    },
    comments: {
      325: {
        id: 325,
        body: "I love this picture!",
        author_id: 24,
        photo_id: 56
      },
      467: {
        id: 467,
        body: "So cute!",
        author_id: 35,
        photo_id: 27
      }
    }
  },
  errors: {
    login: ["Incorrect username/password combination"],
    signup: ["Password has to be at least 8 characters", "Username can't be blank", "Email can't be blank"],
    comment: ["Comment can't be blank"]
  }
  session: {
    currentUser: {
      id: 9,
      username: "star_tracker",
      image_url: "/assets/images/profiles/12453.jpg"
    }
  }
}

```
