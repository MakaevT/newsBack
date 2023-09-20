const { Router } = require("express");
const { newsController } = require("../controllers/news.controller");


const router = Router();


router.post('/news', newsController.addNews)
router.get('/news/category/:id', newsController.getNewsByCategory)
router.get('/news/:id', newsController.getNewsById)


module.exports = router