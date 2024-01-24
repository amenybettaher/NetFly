const connection = require('../database/index.js');

const getAll = (callback) => {
    const query = 'SELECT * FROM netfly';
    connection.query(query, (err, result) => {                                  
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
}

const getOne = (name, callback) => {
    const query = 'SELECT * FROM netfly WHERE name=?';
    connection.query(query, [name], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            if (result.length === 0) {
                callback("film not found", null);
            } else {
                callback(null, result[0]);
            }
        }
    });
}

const create = (filmData, callback) => {
    const { img, name, description, category } = filmData;
    const query = 'INSERT INTO netfly (img, name, description, category) VALUES (?, ?, ?, ?)';

    connection.query(query, [img, name, description, category], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
};

const remove = (filmName, callback) => {
    const query = 'DELETE FROM netfly WHERE name=?';
    connection.query(query, [filmName], (err) => {
        if (err) {
            callback(err);
        } else {
            callback(null);
        }
    });
}

const update = (filmName, filmData, callback) => {
    const { img, name, description, category } = filmData;
    const query = 'UPDATE netfly SET img=?, name=?, description=?, category=? WHERE name=?';
    connection.query(query, [img, name, description, category, filmName], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
}
const getByCategory = (category, callback) => {
    const query = 'SELECT * FROM netfly WHERE category=?';
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