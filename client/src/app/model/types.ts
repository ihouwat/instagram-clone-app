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
}

//==============================================================================
// Post
//==============================================================================

export interface Post {
  id:number;
  owner: User;
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
// Chatroom
//==============================================================================

export interface Chatroom {
  postId:number;
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