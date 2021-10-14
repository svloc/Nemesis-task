const pool = require("../../config/database");

module.exports = {
  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from login where email=?`,
      [
        email,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  createLogin: (data, callBack) => {
    pool.query(
      `insert into login (name, gender,password, email) values(?,?,?,?)`,
      [
        data.name,
        data.gender,
        data.password,
        data.email
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  create: (data, callBack) => {
    pool.query(
      `insert into users (username, moNumber, email, address) values(?,?,?,?)`,
      [
        data.username,
        data.moNumber,
        data.email,
        data.address
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUsers: (callBack) => {
    pool.query(
      `select * from users`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserById: (id, callBack) => {
    pool.query(
      `select * from users where id=?`,
      [
        id,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      `update users set username=?, moNumber=?, email=?, address=? where id=?`,
      [
        data.username,
        data.moNumber,
        data.email,
        data.address,
  
        data.id
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteUser: (id, callBack) => {
    pool.query(
      `delete from users where id=?`,
      [
        id,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
