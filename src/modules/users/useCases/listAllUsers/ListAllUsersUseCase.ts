import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.list();    

    const userIsAdmin = this.usersRepository.findById(user_id);
    
    if(!userIsAdmin){
      throw new Error("User not exists!");
    }

    if(!userIsAdmin.admin){
      throw new Error("User not is admin!");
    }

    return user;
  }
}

export { ListAllUsersUseCase };
