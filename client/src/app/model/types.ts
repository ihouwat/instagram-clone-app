//==============================================================================
// User
//==============================================================================

export interface User {
  username:string;
  id:number;
  email:string;
  password:string;
  imageURL:string;
  fullName:string;
  numOfPosts:number;
  numOfFollowers:number;
  numFollowing:number;
  description:string;
  website:string;
  listOfFollowing:Array<User>;
  listOfFollowers:Array<User>;
  likedPosts: Array<Post>; // Identify by post IDs
}

//==============================================================================
// Post
//==============================================================================

export interface Post {
  id:number;
  owner:User;
  imageURL:string;
  numOfLikes:number;
  numOfComments:number;
  comments:Array<Comment>;
  date:Date;
}

//==============================================================================
// Post Comment
//==============================================================================

export interface Comment {
  comment:string;
  postId:number; // Will be the post's id
  date:Date;
  sender:User;
}

//==============================================================================
// Chat
//==============================================================================

export interface Chat {
  id:number;
  participants:Array<User>;
  unreadMessages:boolean;
  date:Date;
}

//==============================================================================
// Individual Message
//==============================================================================

export interface Message {
  chatId:number; // Matches the chatroom id
  sender:User;
  msgRead:boolean;
  date:Date;
}