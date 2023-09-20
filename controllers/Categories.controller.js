const Category = require('../Category.model');
const News = require('../models/News.model');

module.exports.CategoriesController = {
    getCategories: (req, res) => {
        Category.find()
        .then((data) => res.json(data))
        .catch((error) => res.json(error));
    },

    addCategory: (req, res) => {
        console.log(req.body)
        Category.create({
            name: req.body.name,
        }).then((data) => res.json(data)).catch((error) => res.json(error));
    },

    deleteCategoryById: (req, res) => {
       Category.findbyIdAndDelete(req.params.id)
       .then(() => res.json('deleted'))
       .catch((error) => res.json(error))
    },
    getNewsById: (req, res) => {
        News.findById(req.params.id)
        .then(() => res.json('deleted'))
        .catch((error) => res.json(error))
     }
   
}