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

Channel.find(batman.id).update_attributes!(
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

Channel.find(shadow.id).update_attributes!(
          channel_name: 'Sons of the Patriots',
          video_url: 'https://www.youtube.com/watch?v=BHrUj9G-mwc',
          stream_name: 'Metal Gear Solid V: The Phantom Pain',
          stream_description: "\"Why are we still here... just to suffer?\" Enjoy the trailer for the last Metal Gear game from Hideo Kojima.",
          profile_image_url: 'https://res.cloudinary.com/zwitch/image/upload/q_100/v1501352308/71853_rvcp6m.jpg'
)

dbz = User.create!(
          username: "Deryl Weevly",
          password: "weebly5000"
)

Channel.find(dbz.id).update_attributes!(
          channel_name: 'Fighters of Z',
          video_url: 'https://www.youtube.com/watch?v=qdBpjrhqLrM',
          stream_name: 'Dragonball Fighter Z',
          stream_description: " Dragon Ball Fighter Z is born from what makes the DRAGON BALL series so loved and famous: endless spectacular fights with its allpowerful fighters.",
          profile_image_url: 'https://res.cloudinary.com/zwitch/image/upload/c_crop,h_720,q_100,w_720,x_170/v1503518664/maxresdefault_tvcdi6.jpg'
)

spidey = User.create!(
          username: "Excelsior",
          password: "gomahvel"
)

Channel.find(spidey.id).update_attributes!(
          channel_name: 'Mahvel',
          video_url: 'https://www.youtube.com/watch?v=8pR0o2fGyHg',
          stream_name: 'Spider-Man E3 Gameplay',
          stream_description: 'Check out the gameplay demo of Marvel’s Spider-Man shown at the E3 2017.',
          profile_image_url: 'https://res.cloudinary.com/zwitch/image/upload/q_100/v1500775111/Profiles/78244_g4ueq0.jpg'
)

dio = User.create!(
          username: "Dio",
          password: "itisidio"
)

Channel.find(dio.id).update_attributes!(
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

Channel.find(zelda.id).update_attributes!(
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

Channel.find(inside.id).update_attributes!(
          channel_name: 'Mind Channel',
          video_url: 'https://www.youtube.com/watch?v=NP4AuKdb_dA',
          stream_name: 'Inside: Complete Walkthrough',
          stream_description: 'Full Walkthrough for the game Inside. All secrets, all collectables, both endings. Enjoy!',
          profile_image_url: 'https://res.cloudinary.com/zwitch/image/upload/q_100/v1500850453/Profiles/mlwVgO2L.jpg'
)

john = User.create!(
          username: "potato monster",
          password: "potatoes"
)

Channel.find(john.id).update_attributes!(
          channel_name: 'John Freeman',
          video_url: 'https://www.youtube.com/watch?v=OHxyZaZlaOs',
          stream_name: 'Life is full of half-life consequences...', stream_description: 'When life gives you lemons, make lemon grenades. Or watch my stream. Either works.',
          profile_image_url: 'https://res.cloudinary.com/zwitch/image/upload/q_100/v1500775093/Profiles/john-freeman_jezgoi.png'
)

dallas = User.create!(
          username: "Dallas",
          password: "supersecretpassword"
)

ganymede = User.create!(
          username: "Ganymede",
          password: "jupiterbestplanet"
)

mikey = User.create!(
          username: "mikey",
          password: "mikeyboy96"
)

terrance = User.create!(
          username: "Terrance",
          password: "appacademy"
)

joey = User.create!(
          username: "Joey",
          password: "joeyjoey"
)

howard = User.create!(
          username: "Howard",
          password: "howieisgreat"
)

ade = User.create!(
          username: "Ade",
          password: "frigginjoey"
)

virginia = User.create!(
          username: "Virginia",
          password: "beststate"
)

naum = User.create!(
          username: "Naum31",
          password: "numlet"
)

zpants = User.create!(
          username: "Z Pants",
          password: "pantsareus"
)

ChatMessage.create!(
          chatroom_id: inside.id,
          user_id: zpants.id,
          body: "Hello there!"
)

ChatMessage.create!(
          chatroom_id: inside.id,
          user_id: zpants.id,
          body: "What do you think of live chat"
)

ChatMessage.create!(
          chatroom_id: inside.id,
          user_id: naum.id,
          body: "Its pretty cool"
)

ChatMessage.create!(
          chatroom_id: inside.id,
          user_id: naum.id,
          body: "When are we getting emotes"
)

ChatMessage.create!(
          chatroom_id: inside.id,
          user_id: zpants.id,
          body: "SoonTM"
)

ChatMessage.create!(
          chatroom_id: batman.id,
          user_id: dallas.id,
          body: "Oh Hey!"
)

ChatMessage.create!(
          chatroom_id: batman.id,
          user_id: dallas.id,
          body: "Not a huge batman fan, but these games are sick. The trailers are cool, too."
)

ChatMessage.create!(
          chatroom_id: batman.id,
          user_id: mikey.id,
          body: "I had the video on full screen and I seriously thought my computer was crashing at the end there.﻿"
)

ChatMessage.create!(
          chatroom_id: batman.id,
          user_id: terrance.id,
          body: "Its a bit too dark for my taste.﻿"
)

ChatMessage.create!(
          chatroom_id: spidey.id,
          user_id: ganymede.id,
          body: "I am pretty excited for this."
)

ChatMessage.create!(
          chatroom_id: spidey.id,
          user_id: ganymede.id,
          body: "I am glad they are sticking to their own version of spidey rather than trying to rehash the same old stories."
)

ChatMessage.create!(
          chatroom_id: spidey.id,
          user_id: mikey.id,
          body: "that swinging is so smooth"
)

ChatMessage.create!(
          chatroom_id: spidey.id,
          user_id: mikey.id,
          body: "me wants it"
)

ChatMessage.create!(
          chatroom_id: spidey.id,
          user_id: ganymede.id,
          body: "And sweet we get to see Miles at the end."
)

ChatMessage.create!(
          chatroom_id: dbz.id,
          user_id: terrance.id,
          body: "These trailers are actually art... I shouldn't be this excited﻿."
)

ChatMessage.create!(
          chatroom_id: dbz.id,
          user_id: mikey.id,
          body: "agreed﻿"
)

ChatMessage.create!(
          chatroom_id: dbz.id,
          user_id: mikey.id,
          body: "can't wait to ﻿spend summer playing it"
)

ChatMessage.create!(
          chatroom_id: dio.id,
          user_id: dio.id,
          body: "I REJECT MY HUMANITY, JOJO!"
)

ChatMessage.create!(
          chatroom_id: dio.id,
          user_id: dio.id,
          body: "I have become so much more!"
)

ChatMessage.create!(
          chatroom_id: dio.id,
          user_id: virginia.id,
          body: "What are you even on about"
)

ChatMessage.create!(
          chatroom_id: zelda.id,
          user_id: virginia.id,
          body: "The world is so peaceful."
)

ChatMessage.create!(
          chatroom_id: zelda.id,
          user_id: virginia.id,
          body: "All I want to do is walk around."
)

ChatMessage.create!(
          chatroom_id: john.id,
          user_id: joey.id,
          body: "This is some funny stuff."
)

ChatMessage.create!(
          chatroom_id: shadow.id,
          user_id: ade.id,
          body: "Why is everything in this game so ridiculous."
)

ChatMessage.create!(
          chatroom_id: shadow.id,
          user_id: howard.id,
          body: "The ridiculousness is the best part though"
)
ChatMessage.create!(
          chatroom_id: shadow.id,
          user_id: howard.id,
          body: "So entertaining"
)
