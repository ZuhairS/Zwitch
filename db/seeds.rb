# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

guest_user = User.create!(username: "Guest", password: "guestpassword")

user1 = User.create!(username: "potato monster", password: "potatoes")
user2 = User.create!(username: "Shadowter", password: "supershadow")
user3 = User.create!(username: "Deryl Weevly", password: "weebly5000")
user4 = User.create!(username: "Excelsior", password: "gomahvel")
user5 = User.create!(username: "mackey", password: "mackster12")
user6 = User.create!(username: "Dio", password: "itisidio")
user7 = User.create!(username: "Mogambo", password: "jambojambo")
user8 = User.create!(username: "xXxDarkMockxXx", password: "superdarkpassword")
