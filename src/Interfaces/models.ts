export interface Comment {
  postId: string;
  id: number;
  name: string;
  email: string;
  content: string;
}

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
  seen: boolean;
  favorite: boolean;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}


