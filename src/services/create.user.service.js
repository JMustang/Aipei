import UserRepository from "../repositories/user.repository.js";

class CreateUserService {
  execute(data) {
    /*
          username
          name
          id
        */
    if (!data.username) {
      throw new Error("Username is required");
    }

    const userRepository = UserRepository;

    // Verificar se o usuário já existe no banco de dados
    const existUser = userRepository.findByUsername(data.username);

    if (existUser) {
      throw new Error("This user already exists");
    }

    // Essa parte salva o usuário no banco de dados
    return userRepository.save(data);
  }
}

export { CreateUserService };
