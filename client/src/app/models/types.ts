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
}

//==============================================================================
// Post
//==============================================================================

export interface Post {
  id:number;
  owner: User;
  imageURL:string;
  numOfLikes:number;
  comments:Array<String>;
  date:Date;
}

//==============================================================================
// Post Comment
//==============================================================================

export interface Comment {
  comment:string;
  id:number; // Will be the post's id
  date:Date;
}

//==============================================================================
// Chatroom
//==============================================================================

export interface Chatroom {
  id:number;
  participants:Array<User>;
  date:Date;
}

//==============================================================================
// Individual Message
//==============================================================================

export interface Message {
  id:number; // Matches the chatroom id
  sender: User;
  date: Date;
}