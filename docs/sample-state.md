```
{
  session: {
    currentUser: {
      id: 1,
      username: "ZPowers",
      profileImgUrl: ""
    },
    errors: []
  }

  users: {
    1: {
      id: 1,
      username: "ZPowers",
      profileImgUrl: ""
    },
    2: {
      id: 2,
      username: "mankey",
      profileImgUrl: ""
    }
  }

  channels: {
    allChannels: {
      1: {
        id: 1,
        channelName: "Game Trailers",
        ownerId: 1,
        },
      2: {
        id: 2,
        channelName: "mankey's channel",
        ownerId: 2,
      }
    },
    selectedChannel: {
      id: 1,
      channelName: "Game Trailers",
      ownerId: 1,
      videoUrl: "https://www.youtube.com/watch?v=gOE2BVRCUkM"
      streamName: "God of War E3",
      streamDesc: "Footage of the new God of War game from E3",
      bannerImgUrl: ""
    }
    customizeErrors: []
  }

  follows: {
    1: {
      id: 1,
      followerId: 2,
      followedChannelId: 1
    }
  }

  chatrooms: {
    1: {
      id: 1,
      channelId: 1
    },
    2: {
      id: 2,
      channelId: 1
    }
  }

  chatMessages: {
    1: {
      id: 1,
      chatroomId: 1,
      userId: 2,
      body: "Hey ZPowers!"
    },
    2: {
      id: 2,
      chatroomId: 1,
      userId: 2,
      body: "Big Fan!"
    }
  }
}
```
