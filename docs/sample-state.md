```
{
  currentUser: {
    id: 1,
    username: "ZPowers",
  }

  users: {
    1: {
      id: 1,
      username: "ZPowers",
    },
    2: {
      id: 2,
      username: "mankey",
    }
    signUp: {
      errors: []
    },
    logIn: {
      errors: []
    }
  }

  channels: {
    1: {
      id: 1,
      channelName: "Game Trailers",
      ownerId: 1,
      videoUrl: "https://www.youtube.com/watch?v=gOE2BVRCUkM"
      streamName: "God of War E3",
      streamDesc: "Footage of the new God of War game from E3"
      profileImgUrl: "",
      bannerImgUrl: ""
    },
    2: {
      id: 2,
      channelName: "mankey's channel",
      ownerId: 2,
      videoUrl: ""
      streamName: "mankey's stream",
      streamDesc: "",
      profileImgUrl: "",
      bannerImgUrl: ""
    }
    customizeChannel: {
      errors: []
    }
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
      channelId: 1,
      chatMessageId: 1
    },
    2: {
      id: 2,
      channelId: 1,
      chatMessageId: 2
    },
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
      body: "Big Fan!",
      userId: 2
    }
  }
}
```
