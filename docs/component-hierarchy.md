# Component Hierarchy

### (_Italic: The features on Instagram but not on the MVP list_)


## Functional Component Hierarchy
* `Root`
  * `App`
    * `NavBar`
    * `FeedPage`
    * `Footer`

## NavBar
* NavBar 
  * Components
    * _`UserSearchBoxContainer`_ + _`UserSearchIndex`_ + _`NotificationContainer`_ + _`NotificationButton`_

## Photos
* `PhotoIndexContainer` + `PhotoIndex`
  * Route: `/#/`
  * State: `photos`, `users`
  * Components:
    * `PhotoIndexItem` + `CommentItem`
      * State: `photos[:id]`, `users[:id]`, `photos[:photoId].commentIds`,  `ui`

* `PhotoFormContainer` + `PhotoForm`
  * Route: `/#/photos/new`
  * State: errors.photoForm

* `PhotoShowContainer` + `PhotoShow`
  * Route: `/#/photos/:photoId`
  * State: `photos[:id], `users[:id]`, ui

* `ProfileIndexContainer` + `PhotoIndex`
  * Route: `/#/users/:username
  * State: photos, users
  * Components:
    * `PhotoIndexItem`
      * State: `photos[:id]`, `users[:id]`, ui

## Signup Form
+ `SignupContainer` + `SignupForm`
  + Route: `/#/signup`
  + State: `errors.signup`

## Session Form
* `SessionFormContainer` + `SessionForm`
  * Route: `/#/login`
  * State: `errors.session`

## Followers
* `FollowersIndexContainer` + `FollowersIndex`
  * Routes: `/#/:username/followers`
  * State: `users[:id].followerIds`
  * Component:
    * `FollowersIndexItemContainer` + `FollowersIndexItem`
    * State: `follows[:id]`

## Following
* `FollowingIndexContainer` + `FollowingIndex`
  * Routes: `/#/:username/following`
  * State: `users[:id].followingIds`
  * Component:
    * `FollowersIndexItem`
    * State: `follows[:id]`

## Comment
* `CommentContainer` + `CommentItem`
  * State: `photos[:photoId].commentIds` 

## Like
* LikeIndexContainer + LikeIndex
  * Route: `/#/:photoId/liked_by`
  * State: `photos[:id].likeIds`
  * Components:
    * `LikeIndexItem`
      State: `likes[:id]`
