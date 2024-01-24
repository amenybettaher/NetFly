const netfly = require('../models/model');

const getAllfilm = (req, res) => {
    netfly.getAll((err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(result);
        }
    });
}

const getOnefilm = (req, res) => {
    const name = req.params.name;
    netfly.getOne(name, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(result);
        }
    });
}

const createfilm = (req, res) => {
    netfly.create(req.body, (err, result) => {
        if (err) {
            res.status(409).send(err);
        } else {
            res.status(201).send(result);
        }
    });
}

const deletefilm = (req, res) => {
    netfly.remove(req.params.name, (err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(204).send();
        }
    });
}

const updatefilm = (req, res) => {
    netfly.update(req.params.name, req.body, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else if (!result) {
            res.status(404).send("film is not found");
        } else {
            res.status(200).send();
        }
    });
}

const getByCategory = (req, res) => {
  const category = req.params.category;
  
  if (!category) {
      return res.status(400).send("Category parameter is required");
  }
  netfly.getByCategory(category, (err, result) => {
      if (err) {
          return res.status(500).send(err);
      } else if (!result || result.length === 0) {
          return res.status(404).send("No films found in the specified category");
      } else {
          return res.status(200).json(result);
      }
  });
}

module.exports = {
    getAllfilm,
    getOnefilm,
    createfilm,
    deletefilm,
    updatefilm,
    getByCategory,
};
