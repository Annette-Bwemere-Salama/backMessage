export interface UserInterface {
    email?:string;
    username?: string;
    lastName?: string;
}

export interface DatabaseUserInterface {
    username: string;
    password: string;
    isAdmin: boolean;
    _id: string;
  }