## Component Hierarchy

#### AuthFormContainer
- AuthForm

#### FeaturedContainer
- FeaturedChannel
- FeaturedChannels

#### NavbarContainer
- Navbar

#### ChannelContainer
- ChannelIndex
- ChannelItem
- ChannelDetail
  - ChannelForm

#### ChannelFormContainer
- ChannelForm

#### FollowContainer
- FollowIndex
- FollowIndexItem

#### ChatContainer
- Chat
- ChatItem

#### Bonus: SearchContainer

#### Bonus: NotificationContainer

|Route|Component|
|-----|---------|
|`/`|FeatureContainer, NavContainer|
|`/signup` & `/signin`| AuthForm Container|
|`/channels`|ChannelContainer, FollowContainer, NavContainer|
|`/channels/:userId`|ChannelContainer, FollowContainer, ChatContainer, NavContainer|
|`/channels/:userId/customize`|ChannelFormContainer|
