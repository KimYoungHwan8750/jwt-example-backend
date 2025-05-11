import { Injectable } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class LoginService {
  constructor(
    private readonly userService: UserService
  ) {}

  validateUser(loginDto: LoginDto) {
    const user = this.userService.getUserById(loginDto.id);
    if (!user) {
      return false;
    }

    if (user.password === loginDto.password) {
      return true;
    }

    return false;
  }
}