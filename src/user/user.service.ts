import { Injectable } from "@nestjs/common";

interface User {
  id: string;
  password: string;
}

@Injectable()
export class UserService {
  private readonly users: User[] = [
    {
      id: "id1",
      password: "password1",
    },
    {
      id: "id2",
      password: "password2",
    },
    {
      id: "id3",
      password: "password3",
    },
  ];

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: string): User | undefined {
    return this.users.find(user => user.id === id);
  }
}