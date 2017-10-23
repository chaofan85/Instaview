# Routes

## Frontend Routes

* ~~`/` - login, signup, or feed index~~
* `/` - photos index
* `/login` - login form
* `/signup` - signup form
* `/:username` -user profile
* `/:username/followers` -user followers list
* `/:username/following` -user's following list
* `/upload` - upload a photo
* `/photo/:photoId` - photo show
* `/photo/:photoId/liked_by` - photo likes list

---

## API Endpoints
### `users`
* `POST /api/users` - sign up
* `GET /api/users/:id` - Return user profile

### `photos`
* `GET /api/photos` - return photo feeds
* `GET /api/photos/:photoId` - return a photo post
* `POST /api/photos` - upload a new photo
* `DELETE /api/photos/:photoId` -delete a photo

### `comments`
* `POST /api/photos/:photoId/comments` - write a photo comment
* `DELETE /api/photos/:photoId/comments/:commentId` - delete a photo comment

### `follows`
* `POST /api/follows` - follow user
* `DELETE /api/follows/:followId` - unfollow user

### `likes`
* `POST /api/photos/:photoId/likes` - like a photo
* `DELETE /api/photos/:photoId/likes/:likeId` - remove a like
