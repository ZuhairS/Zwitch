# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

guest_user = User.create!(username: "Guest", password: "guestpassword")

user1 = User.create!(
          username: "potato monster",
          password: "potatoes",
          profile_image_url: 'http://res.cloudinary.com/zwitch/image/upload/q_100/v1500775093/Profiles/john-freeman_jezgoi.png'
          )

user2 = User.create!(
          username: "Shadowter",
          password: "supershadow"
          )

user3 = User.create!(
          username: "Deryl Weevly",
          password: "weebly5000"
          )

user4 = User.create!(
          username: "Excelsior",
          password: "gomahvel",
          profile_image_url: 'http://res.cloudinary.com/zwitch/image/upload/q_100/v1500775111/Profiles/78244_g4ueq0.jpg'
          )

user5 = User.create!(
          username: "mackey",
          password: "mackster12"
          )

user6 = User.create!(
          username: "Dio",
          password: "itisidio",
          profile_image_url: 'http://res.cloudinary.com/zwitch/image/upload/q_100/v1500775126/Profiles/103_izqxma.png'
          )

user7 = User.create!(
          username: "Mogambo",
          password: "jambojambo"
          )

user8 = User.create!(
          username: "xXxDarkKnightxXx",
          password: "superdarkgrumpster",
          profile_image_url: 'http://res.cloudinary.com/zwitch/image/upload/q_100/v1500775137/Profiles/image_hzhibk.jpg'
          )


channel1 = Channel.find(user1.id).update_attributes!(
          channel_name: 'John Freeman',
          video_url: 'https://www.youtube.com/watch?v=OHxyZaZlaOs',
          stream_name: 'Life is full of half-life
          consequences...', stream_description: 'When life gives you lemons, make lemon grenades. Or watch my stream. Either works.'
          )

channel4 = Channel.find(user4.id).update_attributes!(
          channel_name: 'Mahvel',
          video_url: 'https://www.youtube.com/watch?v=K4zm30yeHHE',
          stream_name: 'Spider-Man E3 Gameplay',
          stream_description: 'Check out the gameplay demo of Marvel’s Spider-Man shown at the E3 2017.'
          )

channel6 = Channel.find(user6.id).update_attributes!(
          channel_name: 'It is I, Dio!',
          video_url: 'https://www.youtube.com/watch?v=hATyU-bb1gc',
          stream_name: "JoJo's Bizarre Adventure: All-Star
          Battle - DIO", stream_description: "Channel dedicated to DIO, the Evil Incarnate, the main antagonist of JoJo's Bizarre Adventure."
          )

channel8 = Channel.find(user8.id).update_attributes!(
          channel_name: 'Darkest Night',
          video_url: 'https://www.youtube.com/watch?v=pO2_iUkojCY',
          stream_name: 'Batman: Arkham Knight',
          stream_description: "As the citizens of Gotham flee and criminal gangs take control of the city, Batman uses his own special methods to discover the true purpose behind Scarecrow's plans."
          )
