import { Body, Controller, Post } from "@nestjs/common";
import { LoginDto } from "./dto/login.dto";


@Controller()
export class LoginController {

  @Post("login")
  async login(@Body() loginDto: LoginDto) {
    
  }
}