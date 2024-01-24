const connection = require('../database/index.js');

const getAll = (callback) => {
    const query = 'SELECT * FROM films';
    connection.query(query, (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
}

const getOne = (name, callback) => {
    const query = 'SELECT * FROM films WHERE name=?';
    connection.query(query, [name], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        if (result.length === 0) {
          callback(null, null); 
        } else {
          callback(null, result[0]);
        }
      }
    });
  };
  

const create = (filmData, callback) => {
    const { img, name,price, description, category } = filmData;
    const query = 'INSERT INTO films (img, name, price ,description, category) VALUES (?,?,?,?,?)';

    connection.query(query, [img, name,price , description, category], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
};

const remove = (filmName, callback) => {
    const query = 'DELETE FROM films WHERE name=?';
    connection.query(query, [filmName], (err) => {
        if (err) {
            callback(err);
        } else {
            callback(null);
        }
    });
}

const update = (filmName, filmData, callback) => {
    const { img, name,price, description, category } = filmData;
    const query = 'UPDATE films SET img=?, name=?, price=?, description=?, category=? WHERE name=?';
    connection.query(query, [img, name,price, description, category, filmName], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
}
const getByCategory = (category, callback) => {
    const query = 'SELECT * FROM films WHERE category=?';
    connection.query(query, [category], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove,
    getByCategory,
};