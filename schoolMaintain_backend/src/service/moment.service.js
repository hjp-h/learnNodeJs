const { APP_HOST } = require('../app/config')
const connection = require('../app/database');

// const sqlFragment = `
//   SELECT 
//     m.id id, m.content content, m.createAt createTime, m.updateAt updateTime,
//     JSON_OBJECT('id', u.id, 'name', u.name) author
//   FROM moment m
//   LEFT JOIN user u ON m.user_id = u.id
// `

class MomentService {
  async create(userId, content) {
    const statement = `INSERT INTO moment (content, user_id) VALUES (?, ?);`;
    const [result] = await connection.execute(statement, [content, userId]);
    return result;
  }

  async getMomentById(id) {
    const statement = `
      SELECT 
        m.id id, m.content content, m.createAt createTime, m.updateAt updateTime,
        JSON_OBJECT('id', u.id, 'name', u.name) author,
        IF(COUNT(l.id),JSON_ARRAYAGG(
          JSON_OBJECT('id', l.id, 'name', l.name)
        ),NULL) labels,
        (SELECT IF(COUNT(c.id),JSON_ARRAYAGG(
          JSON_OBJECT('id', c.id, 'content', c.content, 'commentId', c.comment_id, 'createTime', c.createAt,
                      'user', JSON_OBJECT('id', cu.id, 'name', cu.name))
        ),NULL) FROM comment c LEFT JOIN user cu ON c.user_id = cu.id WHERE m.id = c.moment_id) comments,
        (SELECT  JSON_ARRAYAGG(CONCAT("${APP_HOST}/moment/images",file.filename)) FROM file WHERE file.moment_id = m.id) images
      FROM moment m
      LEFT JOIN user u ON m.user_id = u.id
      LEFT JOIN moment_label ml ON m.id = ml.moment_id
      LEFT JOIN label l ON ml.label_id = l.id
      WHERE m.id = ?
      GROUP BY m.id;  
    `;
    try {
      const [result] = await connection.execute(statement, [id]);
      return result[0];
    } catch (error) {
      console.log(error)
    }
  }

  async getMomentList(offset, size) {
    const statement = `
    SELECT 
      m.id id, m.content content, m.createAt createTime, m.updateAt updateTime,
      JSON_OBJECT('id', u.id, 'name', u.name,'avatar',u.avatar_url) author,
      (SELECT COUNT(*) FROM comment c WHERE c.moment_id = m.id) commentCount,
      (SELECT COUNT(*) FROM moment_label ml WHERE ml.moment_id = m.id) labelCount,
      (SELECT  JSON_ARRAYAGG(CONCAT("${APP_HOST}/moment/images",file.filename)) FROM file WHERE file.moment_id = m.id) images
    FROM moment m
    LEFT JOIN user u ON m.user_id = u.id
    LIMIT ?, ?;
    `;

    const [result] = await connection.execute(statement, [offset, size]);
    return result;
  }

  async update(content, momentId) {
    const statement = `UPDATE moment SET content = ? WHERE id = ?;`;
    const [result] = await connection.execute(statement, [content, momentId]);
    return result;
  }

  async remove(momentId) {
    const statement = `DELETE FROM moment WHERE id = ?`;
    const [result] = await connection.execute(statement, [momentId]);
    return result;
  }

  async hasLabel(momentId, labelId) {
    const statement = `SELECT * FROM moment_label WHERE moment_id = ? AND label_id = ?`;
    const [result] = await connection.execute(statement, [momentId, labelId]);
    return result[0] ? true : false;
  }

  async addLabel(momentId, labelId) {
    const statement = `INSERT INTO moment_label (moment_id, label_id) VALUES (?, ?);`;
    const [result] = await connection.execute(statement, [momentId, labelId]);
    return result;
  }

  async removeLabel(momentId, labelId) {
    const statement = `DELETE FROM moment_label WHERE moment_id = ? and label_id = ?`;
    const [result] = await connection.execute(statement, [momentId, labelId]);
    return result;
  }

  async getMimeTypeByFileName(fileName) {
    const statement = `SELECT mimetype FROM file WHERE filename = ?`;
    const [result] = await connection.execute(statement, [fileName]);
    return result;
  }
}

module.exports = new MomentService();

