# API Endpoints

## HTML API
| Label | Method | URL | Result |
| ----- | ------ | --- | ------ |
| Root  | 'GET'  | '/' | Loads React App|

## JSON API
| Controller | Method   | URL            | Notes |
| ---------- | -------- | -------------- | ----- |
| Users      | 'POST'   | '/api/users/'  | New User|
| - | - | - | - |
| Session    | 'POST'   | '/api/session' | Login |
| Session    | 'DELETE' | '/api/session' | Logout |
| - | - | - | - |
| Channels   | 'GET'    | '/api/channels' | Index |
| Channels   | 'GET'    | '/api/channels/:id'  | Show Channel|
| Channels   | 'PATCH'  | '/api/channels/:id'  | Update Channel|
| - | - | - | - |
| FeaturedChannels  | 'GET'  | '/api/featured' | Featured Channel |
| - | - | - | - |
| Featureds  | 'GET'    | '/api/featured_channels'  | Featured Channels Index|
| - | - | - | - |
| Follows    | 'GET'    | '/api/follows' | Index|
| Follows    | 'POST'   | '/api/follows' | Follow|
| Follows    | 'GET'    | '/api/follows/:id' | Show Follow|
| Follows    | 'DELETE' | '/api/follows/:id' | UnFollow|
| - | - | - | - |
| Chatrooms  | 'POST'   | '/api/chatrooms' | New Chatroom|
| Chatrooms  | 'GET'    | '/api/chatrooms/:id' | Show Chatroom|
| - | - | - | - |
| ChatMessages  | 'POST' | '/api/chat_messages' | New Chat message|
| ChatMessages  | 'GET'  | '/api/chat_messages/:id' | Show Chat message|
