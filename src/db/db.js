const pool = require('./pool.js');

const obj = {};

// obj.readCard = async (id) => {
//   const sql = `SELECT *
//   FROM Cards
//   WHERE _id=$1;`;
//   const data = await pool.query(sql, [id]);
//   // TODO: validate that there is only one row
//   console.log(data.rows[0]);
//   return data.rows[0];
// };

// obj.readAllCards = async () => {
//   const sql = `SELECT *
//   FROM Cards;`;
//   const data = await pool.query(sql);
//   return data.rows;
// };

obj.createCard = async (args) => {
  try {
    // this is the current time in format 2022-12-28 12:34:56
    const currentTime = new Date();
    const formattedTime = currentTime
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ');

    // parameterize sql arguments to prevent attacks
    const arr = [
      Number(args['user_id']),
      args['title'],
      args['front'],
      args['back'],
      Number(args['difficulty']),
      args['hints'],
      args['scheduled'] === null ? formattedTime : args['scheduled'], // args['scheduled'] should have format 2022-12-28 12:34:56
    ];

    const sql = `INSERT INTO Cards
    (user_id, title, front, back, difficulty, hints, scheduled)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;`;
    // execute sql command
    const data = await pool.query(sql, arr);
    return data.rows[0];
  } catch (err) {
    console.log('createCard', err);
  }
};

obj.addUser = async (args) => {
  try {
    const arr = [
      args['sub'],
      args['picture'],
      args['email'],
      args['email_verified'],
    ];
    const sql = `INSERT INTO GoogleUserInfo
    (sub, picture, email, email_verified)
    VALUES ($1, $2, $3, $4)
    RETURNING _id;`;
    const data = await pool.query(sql, arr);
    console.log(data.rows);
    return data.rows[0]._id;
  } catch (err) {
    console.log('addUser', err);
  }
};

obj.getUser = async (sub) => {
  try {
    const sql = `SELECT * 
    FROM GoogleUserInfo
    WHERE GoogleUserInfo.sub=$1`;
    const data = await pool.query(sql, [sub]);
    if (data.rows.length === 0) {
      return null;
    } else if (data.rows.length === 1) {
      return data.rows[0];
    } else {
      console.warn('more than one user found');
      throw '';
    }
  } catch {
    console.log('crash in db.getUser');
  }
};

module.exports = obj;
