import UserService from "./../services/user.service"
import { createuserinterface } from "./../interface/user.interface";
export default class UserController {

    async createUser(input: createuserinterface) {
        try {
             await new UserService().createUser(input) ;
             return {"msg":"User created"};
          } catch (error) {
     
            return {"msg":"User already exist"};
          }

    }
}