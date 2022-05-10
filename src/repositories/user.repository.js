class UserRepository {
  users = [];

  // ex: SELECT * FROM USERS WHERE USERNAME = '' LIMIT 1;
  findByUsername(username) {
    const userExists = this.users.find((user) => user.username === username);
    return userExists;
  }

  save(user) {
    // ex: INSERT INTO USERS(USERNAME, NAME) VALUES ('', '');

    const id = Math.random().toString();
    const userWithId = { ...user, id };
    this.users.push(userWithId);
    return userWithId;
  }
}

export default new UserRepository();
