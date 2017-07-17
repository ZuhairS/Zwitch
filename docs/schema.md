# Schema Info
--------
## users
| column name | data type | details |
|------------ | --------- | ------- |
|id| integer| not null, primary key|
|username | string | not null, unique |
|channel_name| string| not null, unique, indexed |
|video_url| string| -|
|stream_name| string| not null|
|stream_desc| string| -|
|profile_img_url| string| -|
|banner_img_url| string| -|
|password_digest| string| not null|
|session_token| string| not null, unique, indexed|

## follows
| column name | data type | details |
|------------ | --------- | ------- |
|id| integer| not null, primary key|
|follower_id| integer | not null, indexed |
|followee_id| integer | not null, indexed |

## chats
| column name | data type | details |
|------------ | --------- | ------- |
|id| integer| not null, primary key|
|channel_user_id| integer| not null, indexed|
|user_id| integer| not null, indexed|
|body| text| not null|
