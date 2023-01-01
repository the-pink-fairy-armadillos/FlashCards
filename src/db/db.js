const pool = require('./pool.js');

const obj = {};

obj.updateCard = async (args) => {
  try {
    
    const sql1 = ` SELECT * FROM Cards WHERE _id=$1`;
    const data1 = await pool.query(sql1, Number(args['_id']));

    const arr = [
      Number(args['_id']),
      args['user_id'] === undefined ? data1.rows[0][1] : args['user_id'],
      args['title'] === undefined ? data1.rows[0][2] : args['title'],
      args['front'] === undefined ? data1.rows[0][3] : args['front'],
      args['back'] === undefined ? data1.rows[0][4] : args['back'],
      Number(args['difficulty']) === undefined ? data1.rows[0][5] : args['difficulty'],
      args['hints'] === undefined ? data1.rows[0][6] : args['hints'],
      args['scheduled'] === undefined ? data1.rows[0][7] : args['scheduled'],
    ];

    const sql2 = ` UPDATE Cards
    SET user_id = $2, 
    title = $3,
    front = $4,
    back = $5,
    difficulty = $6,
    hints = $7,
    scheduled = $8
    WHERE _id = $1`;

    const data2 = await pool.query(sql2, arr);

  } catch (err) {
    throw `In db.js: obj.updateCard: ${err.message}`; 
  }
}

obj.getCards = async () => {
  const sql = 'SELECT * FROM cards';
  const data = await pool.query(sql);
  return data.rows;
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
