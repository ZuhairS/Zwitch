# Zwitch

[Live APP](https://github.com/ZuhairS/Zwitch)

[Trello](https://trello.com/b/GYIPbjDY/zwitch)

## Minimum Viable Product

Zwitch is a web application inspired by Twitch built using Ruby on Rails and React/Redux. By the end of week 9, the hope is that this app will, at minimum, satisfy the following criteria professionally:

- [x] Hosting on Heroku
- [x] Signup/Login/Logout along with demo Login
- [ ] Adding/streaming online videos
- [ ] Follows
- [ ] Basic chat
- [ ] User/Channel profiles
- [ ] Production README

## Design Docs
- [View Wireframes](./wireframes.md)
- [React Components](./component-hierarchy.md)
- [API Endpoints](./api-endpoints.md)
- [DB Schema](./schema.md)
- [Sample State](./sample-state.md)

## Implementation Timeline

### Phase 1: Backend setup, Front End User Authentication (2 days)
**Objective:**
- Functioning Rails project with front-end Authentication
- Fully styled login components

### Phase 2: User/Channel Model, API and components (4 days)
**Objective:**
- User/Channels can be created and viewed.
- Channels get created with default information.
- Can modify channel information and add video to stream.
- Fully styled channel components.

### Phase 3: Follow Model, API and component (1 days)
**Objective:**
- Functioning follow button with updating sidebar.
- Fully styled sidebar.

### Phase 4: Chat Model, API and component (2 days)
**Objective:**
- Chat can be interacted with.
- Different logged in users can chat together albeit after refreshing page.
- Initialize chat once a video has been added.
- Fully styled chat component.

### Bonus Features
- [ ] Live chat
- [ ] Synced videos between users
- [ ] Search channels
- [ ] Get notifications when followee starts stream
- [ ] Allow browsing while watching stream (video in smaller window)
