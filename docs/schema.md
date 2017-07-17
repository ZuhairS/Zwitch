# Schema Info
--------
## users
| column name | data type | details |
|------------ | --------- | ------- |
|id| integer| not null, primary key|
|username | string | not null, unique |
|password_digest| string| not null|
|session_token| string| not null, unique, indexed|

## channels
| column name | data type | details |
|------------ | --------- | ------- |
|id| integer| not null, primary key|
|channel_name| string| not null, unique, indexed|
|owner_id| integer| not null, foreign key (references users), unique, indexed |
|video_url| string| -|
|stream_name| string| not null|
|stream_desc| string| -|
|profile_img_url| string| -|
|banner_img_url| string| -|

## follows
| column name | data type | details |
|------------ | --------- | ------- |
|id| integer| not null, primary key|
|follower_id| integer | not null, foreign key (references users), indexed |
|followed_channel_id| integer | not null, foreign key (references channels), indexed |

## chatroom
| column name | data type | details |
|------------ | --------- | ------- |
|id| integer| not null, primary key|
|channel_id| integer| not null, foreign key (references channels), indexed, unique|
|chat_message_id| integer| not null, foreign key (references chat_messages), indexed|

## chat_messages
| column name | data type | details |
|------------ | --------- | ------- |
|id| integer| not null, primary key|
|chatroom_id| integer| not null, foreign key (references chatroom), indexed|
|user_id| integer| not null, foreign key (references users), indexed|
|body| text| not null|
