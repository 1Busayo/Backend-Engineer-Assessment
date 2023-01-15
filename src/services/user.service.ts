import { createuserinterface } from "./../interface/user.interface"
import { User } from "../models/User";
const bcrypt = require('bcryptjs');




export default class UserService {


    async createUser(input: createuserinterface) {

        let { username, password } = input;

        input.password = bcrypt.hashSync(password, 10);

        await User.query().insert(input);
    }

}