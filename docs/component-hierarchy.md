## Component Hierarchy

#### AuthFormContainer
- AuthForm

#### FeatureContainer
- FeatureStream
- FeatureChannels

#### NavbarContainer
- Navbar

#### ChannelContainer
- ChannelIndex
- ChannelIndexItem
- ChannelDetail
  - ChannelForm

#### ChannelFormContainer
- ChannelForm

#### FollowContainer
- FollowIndex
- FollowIndexItem

#### ChatContainer
- Chat
- ChatItems

#### Bonus: SearchContainer

#### Bonus: NotificationContainer

|Route|Component|
|-----|---------|
|`/`|FeatureContainer, NavContainer|
|`/signup` & `/signin`| AuthForm Container|
|`/channels`|ChannelContainer, FollowContainer, NavContainer|
|`/channels/:userId`|ChannelContainer, FollowContainer, ChatContainer, NavContainer|
|`/channels/:userId/customize`|ChannelFormContainer|
