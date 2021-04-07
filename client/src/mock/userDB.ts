export const USERS:any = [
  {
    username:'john',
    id:1,
    email:"john@gmail.com",
    password:"123",
    imageURL:"https://ps.w.org/tiny-compress-images/assets/icon-256x256.png?rev=1088385",
    fullName:"John Smith",
    numOfPosts:104,
    numOfFollowers:50,
    numFollowing:30,
    description:"This is the official fanpage of John Doe",
    website:"www.john.com",
    listOfFollowing: [],
    likedPosts: [
      { id: 4 },
      { id: 5 },
      { id: 6 },
    ]
  },
  {
    username:'igor',
    id:2,
    email:"igor@gmail.com",
    password:"321",
    imageURL:"https://artbreeder.b-cdn.net/imgs/c36be2df0f1778a8fdd6b03f.jpeg?width=256",
    fullName:"Igor Houwat",
    numOfPosts:10,
    numOfFollowers:500,
    numFollowing:3033,
    description:"This is the official fanpage of Igor Houwat",
    website:"www.igor.com",
    listOfFollowing: [
      {
        username: 'john'
      }
    ],
    likedPosts: [
      { id: 1 },
      { id: 2 },
      { id: 3},
    ]
  },
  {
    username:'Lauren',
    id:3,
    email:"lauren@gmail.com",
    password:"321",
    imageURL:"https://artbreeder.b-cdn.net/imgs/1d92193f8a7a5f0091d8301d.jpeg?width=256",
    fullName:"Lauren Smith",
    numOfPosts:15,
    numOfFollowers:50,
    numFollowing:143,
    description:"This is the official fanpage of Lauren",
    website:"www.lauren.com",
    listOfFollowing: [
      {username: 'john'},
      {username: 'igor'}
    ],
    likedPosts: [
      { id: 1 },
      { id: 2 },
      { id: 3},
    ]
  },
  {
    username:'Gergi',
    id:4,
    email:"gergi@gmail.com",
    password:"321",
    imageURL:"https://artbreeder.b-cdn.net/imgs/793b61e4f31aaf763fd3a8cc.jpeg?width=256",
    fullName:"Gergi Bergi",
    numOfPosts:150,
    numOfFollowers:150,
    numFollowing:62,
    description:"This is the official fanpage of Gergi",
    website:"www.gergi.com",
    listOfFollowing: [
      {username: 'lauren'},
      {username: 'igor'}
    ],
    likedPosts: [
      { id: 1 },
      { id: 2 },
      { id: 5},
    ]
  },
  {
    username:'Manu',
    id:5,
    email:"manu@gmail.com",
    password:"321",
    imageURL:"https://artbreeder.b-cdn.net/imgs/793b61e4f31aaf763fd3a8cc.jpeg",
    fullName:"Manu Mane",
    numOfPosts:42,
    numOfFollowers:1250,
    numFollowing:96,
    description:"This is the official fanpage of Manu",
    website:"www.manu.com",
    listOfFollowing: [
      {username: 'lauren'},
      {username: 'igor'},
      {username: 'gergi'}
    ],
    likedPosts: [
      { id: 1 },
      { id: 2 },
      { id: 5},
    ]
  },
]