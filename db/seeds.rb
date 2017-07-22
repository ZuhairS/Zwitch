# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

guest_user = User.create!(username: "Guest", password: "guestpassword")

user1 = User.create!(username: "potato monster", password: "potatoes", profile_image_url: 'http://i1.kym-cdn.com/entries/icons/original/000/000/994/john-freeman.png')
user2 = User.create!(username: "Shadowter", password: "supershadow")
user3 = User.create!(username: "Deryl Weevly", password: "weebly5000")
user4 = User.create!(username: "Excelsior", password: "gomahvel", profile_image_url: 'https://avatarfiles.alphacoders.com/782/78244.jpg')
user5 = User.create!(username: "mackey", password: "mackster12")
user6 = User.create!(username: "Dio", password: "itisidio", profile_image_url: 'http://i0.kym-cdn.com/profiles/icons/big/000/100/784/103.png')
user7 = User.create!(username: "Mogambo", password: "jambojambo")
user8 = User.create!(username: "xXxDarkKnightxXx", password: "superdarkgrumpster", profile_image_url: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP1018-CUSA00133_00-AV00000000000014/1499637351000/image?_version=00_09_000&platform=chihiro&w=225&h=225&bg_color=000000&opacity=100')

channel1 = Channel.find(user1.id).update_attributes!(channel_name: 'John Freeman', video_url: 'https://www.youtube.com/watch?v=OHxyZaZlaOs', stream_name: 'Life is full of half-life consequences...', stream_description: 'When life gives you lemons, make lemon grenades. Or watch my stream. Either works.')

channel4 = Channel.find(user4.id).update_attributes!(channel_name: 'Mahvel', video_url: 'https://www.youtube.com/watch?v=K4zm30yeHHE', stream_name: 'Spider-Man E3 Gameplay', stream_description: 'Check out the gameplay demo of Marvel’s Spider-Man shown at the E3 2017.')

channel6 = Channel.find(user6.id).update_attributes!(channel_name: 'It is I, Dio!', video_url: 'https://www.youtube.com/watch?v=hATyU-bb1gc', stream_name: "JoJo's Bizarre Adventure: All-Star Battle - DIO", stream_description: "Channel dedicated to DIO, the Evil Incarnate, the main antagonist of JoJo's Bizarre Adventure.")

channel8 = Channel.find(user8.id).update_attributes!(channel_name: 'Darkest Night', video_url: 'https://www.youtube.com/watch?v=pO2_iUkojCY', stream_name: 'Batman: Arkham Knight', stream_description: "As the citizens of Gotham flee and criminal gangs take control of the city, Batman uses his own special methods to discover the true purpose behind Scarecrow's plans.")
