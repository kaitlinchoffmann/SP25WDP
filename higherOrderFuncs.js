const followers = [
  {
      userId: 12345,
      userName: "cathy123",
      following: true
  },
  {
      userId: 55555,
      userName: "fred23",
      following: false
  },
  {
      userId: 34235,
      userName: "coolcathy",
      following: true
  }
]

followers.forEach(i => console.log(i.userName))

const usernames = followers.map(i => i.userName)
console.log(usernames)

const following = followers.filter(i => i.following == true)
                           .map(i => i.userId)
console.log(following)

