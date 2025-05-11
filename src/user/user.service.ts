import { Injectable } from "@nestjs/common";

interface User {
  id: string;
  password: string;
  name: string;
}

@Injectable()
export class UserService {
  private readonly users: User[] = [
    {
      id: "id1",
      password: "password1",
      name: "user1"
    },
    {
      id: "id2",
      password: "password2",
      name: "user3"
    },
    {
      id: "id3",
      password: "password3",
      name: "user3"
    },
  ];

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: string): User | undefined {
    return this.users.find(user => user.id === id);
  }
}