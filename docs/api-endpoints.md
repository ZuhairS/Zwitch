# API Endpoints

## HTML API
| Label | Method | URL | Result |
| ----- | ------ | --- | ------ |
| Root  | 'GET'  | '/' | Loads React App|

## JSON API
| Controller | Method   | URL            | Notes |
| ---------- | -------- | -------------- | ----- |
| Users   | 'GET'    | '/api/users' | Index |
| Users      | 'POST'   | '/api/users/'  | New User|
| Users      | 'PATCH'  | '/api/users/:id'  | Update User|
| Users      | 'DELETE'  | '/api/users/:id'  | Delete User|
| - | - | - | - |
| Session    | 'POST'   | '/api/session' | Login |
| Session    | 'DELETE' | '/api/session' | Logout |
| - | - | - | - |
| Follows    | 'POST' | '/api/follows' | New Follow|
| Follows    | 'GET' | '/api/follows/:id' | Show Follow|
| Follows    | 'DELETE' | '/api/follows/:id' | Delete Follow|
| - | - | - | - |
| Chats    | 'POST' | '/api/chats' | New Chat|
| Chats    | 'GET' | '/api/chats/:id' | Get All Chat Messages For a Chat|
