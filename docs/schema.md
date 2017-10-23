# Database Schema

## `users`
| column name       | data type | details                   |
|:------------------|:---------:|:--------------------------|
| `id`              | integer   | not null, primary key     |
| `username`        | string    | not null, indexed         |
| `email`           | string    | not null, indexed, unique |
| `image_url`       | string    | not null                  |             
| `password_digest` | string    | not null                  |
| `session_token`   | string    | not null, indexed, unique |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |

## `photos`
| column name          | data type | details                        |
|:---------------------|:---------:|:-------------------------------|
| `id`                 | integer   | not null, primary key          |
| `image_url`          | string    | not null                       |
| `author_id`          | integer   | not null, indexed, foreign key |
| `created_at`         | datetime  | not null                       |
| `updated_at`         | datetime  | not null                       |

+ `author_id` references `users`  

## `likes`
| column name       | data type | details                        |
|:------------------|:---------:|:-------------------------------|
| `id`              | integer   | not null, primary key          |
| `user_id`         | integer   | not null, indexed, foreign key |
| `photo_id`        | integer   | not null, indexed, foreign key |             
| `created_at`      | datetime  | not null                       |
| `updated_at`      | datetime  | not null                       |

+ `user_id` references `users`
+ `photo_id` references `photos`

## `follows`
| column name       | data type | details                        |
|:------------------|:---------:|:-------------------------------|
| `id`              | integer   | not null, primary key          |
| `follower_id`     | integer   | not null, indexed, foreign key |
| `followee_id`     | integer   | not null, indexed, foreign key |             
| `created_at`      | datetime  | not null                       |
| `updated_at`      | datetime  | not null                       |


## `comments`
| column name       | data type | details                        |
|:------------------|:---------:|:-------------------------------|
| `id`              | integer   | not null, primary key          |
| `body`            | string    | not null                       |
| `photo_id`        | integer   | not null, indexed, foreign key |
| `author_id`       | integer   | not null, indexed, foreign key |             
| `created_at`      | datetime  | not null                       |
| `updated_at`      | datetime  | not null                       |

+ `photo_id` references `photos`
+ `author_id` references `users`