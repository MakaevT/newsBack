const News = require('../News.model');

module.exports.newsController = {
    addNews: (req, res) => {
        const {title, text, categoryId} = req.body
       News.create({
        title,
        text,
        categoryId
       })
       .then((data) => res.json(data))
       .catch((error) => res.json(error))
    },

    getNewsByCategory: (req, res) => {
        News.find({categoryId: req.params.id}).populate('categoryId')
        .then((data) => res.json(data))
        .catch((error) => res.json(error))
    }
   
}