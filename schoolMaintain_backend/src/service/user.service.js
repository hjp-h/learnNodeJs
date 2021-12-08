const connection = require('../app/database');

class UserService {
  async create(user) {
    const { name, password } = user;
    const statement = `INSERT INTO user (name, password) VALUES (?, ?);`;
    const result = await connection.execute(statement, [name, password]);

    return result[0];
  }

  async getUserByName(name) {
    const statement = `SELECT * FROM user WHERE name = ?;`;
    const result = await connection.execute(statement, [name]);

    return result[0];
  }

  async getAvatarByUserId(userId) {
    const statement = `SELECT * FROM avatar WHERE user_id = ?;`;
    const [result] = await connection.execute(statement, [userId])
    return result.pop();
  }

  async getBackgroundImageByUserId(userId) {
    const statement = `SELECT * FROM bg_photo WHERE user_id = ?;`;
    const [result] = await connection.execute(statement, [userId])
    return result[0];
  }
}

module.exports = new UserService();
