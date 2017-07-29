# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

guest_user = User.create!(username: "Guest", password: "guestpassword")

batman = User.create!(
          username: "xXxDarkKnightxXx",
          password: "superdarkgrumpster"
)

batman_channel = Channel.find(batman.id).update_attributes!(
          channel_name: 'Darkest Night',
          video_url: 'https://www.youtube.com/watch?v=pO2_iUkojCY',
          stream_name: 'Batman: Arkham Knight - Just another day',
          stream_description: "As the citizens of Gotham flee and criminal gangs take control of the city, Batman uses his own special methods to discover the true purpose behind Scarecrow's plans.",
          profile_image_url: 'https://res.cloudinary.com/zwitch/image/upload/q_100/v1500775137/Profiles/image_hzhibk.jpg'
)

shadow = User.create!(
          username: "Shadowter",
          password: "supershadow"
)

shadow_channel = Channel.find(shadow.id).update_attributes!(
          channel_name: 'Metal Gear Solid V: The Phantom Pain',
          video_url: 'https://www.youtube.com/watch?v=BHrUj9G-mwc',
          stream_name: 'Why are we still here... just to suffer?',
          stream_description: "Why are we still here... just to suffer?",
          profile_image_url: 'https://res.cloudinary.com/zwitch/image/upload/q_100/v1501352308/71853_rvcp6m.jpg'
)

deryl = User.create!(
          username: "Deryl Weevly",
          password: "weebly5000"
)

spidey = User.create!(
          username: "Excelsior",
          password: "gomahvel"
)

spidey_channel = Channel.find(spidey.id).update_attributes!(
          channel_name: 'Mahvel',
          video_url: 'https://www.youtube.com/watch?v=8pR0o2fGyHg',
          stream_name: 'Spider-Man E3 Gameplay',
          stream_description: 'Check out the gameplay demo of Marvel’s Spider-Man shown at the E3 2017.',
          profile_image_url: 'https://res.cloudinary.com/zwitch/image/upload/q_100/v1500775111/Profiles/78244_g4ueq0.jpg'
)

john = User.create!(
          username: "potato monster",
          password: "potatoes"
)

john_channel = Channel.find(john.id).update_attributes!(
          channel_name: 'John Freeman',
          video_url: 'https://www.youtube.com/watch?v=OHxyZaZlaOs',
          stream_name: 'Life is full of half-life consequences...', stream_description: 'When life gives you lemons, make lemon grenades. Or watch my stream. Either works.',
          profile_image_url: 'https://res.cloudinary.com/zwitch/image/upload/q_100/v1500775093/Profiles/john-freeman_jezgoi.png'
)

dio = User.create!(
          username: "Dio",
          password: "itisidio"
)

dio_channel = Channel.find(dio.id).update_attributes!(
          channel_name: 'It is I, Dio!',
          video_url: 'https://www.youtube.com/watch?v=hATyU-bb1gc',
          stream_name: "JoJo's Bizarre Adventure: All-Star Battle - DIO",
          stream_description: "Channel dedicated to DIO, the Evil Incarnate, the main antagonist of JoJo's Bizarre Adventure.",
          profile_image_url: 'https://res.cloudinary.com/zwitch/image/upload/q_100/v1500775126/Profiles/103_izqxma.png'
)

zelda = User.create!(
          username: "Mogambo",
          password: "jambojambo"
)

zelda_channel = Channel.find(zelda.id).update_attributes!(
          channel_name: 'For Heart and Soul',
          video_url: 'https://www.youtube.com/watch?v=1rPxiXXxftE',
          stream_name: "The Legend of Zelda: Breath of the Wild",
          stream_description: "Enjoy the beauty of the wilderness in Breath of the Wild.",
          profile_image_url: 'https://res.cloudinary.com/zwitch/image/upload/q_100/v1500851793/Profiles/25.jpg'
)

inside = User.create!(
          username: "mackey",
          password: "mackster12"
)

inside_channel = Channel.find(inside.id).update_attributes!(
          channel_name: 'Mind Channel',
          video_url: 'https://www.youtube.com/watch?v=NP4AuKdb_dA',
          stream_name: 'Inside: Complete Walkthrough',
          stream_description: 'Full Walkthrough for the game Inside. All secrets, all collectables, both endings. Enjoy!',
          profile_image_url: 'https://res.cloudinary.com/zwitch/image/upload/q_100/v1500850453/Profiles/mlwVgO2L.jpg'
)

dallas = User.create!(
          username: "Dallas",
          password: "supersecretpassword"
)

ChatMessage.create!(
          chatroom_id: batman_channel.id,
          user_id: dallas.id,
          body: "Oh Hey!"
)

ChatMessage.create!(
          chatroom_id: batman_channel.id,
          user_id: dallas.id,
          body: "Not a huge batman fan, but these games are sic. The trailers are cool, too."
)
