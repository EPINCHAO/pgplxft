export interface RegisterPostData {
    name: string;
    email: string;
    password: string;
  }
  
  export interface User extends RegisterPostData {
    id: string;
  }

  export interface LoginPostData {
    email: string;
    password: string;
  }