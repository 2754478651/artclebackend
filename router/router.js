const express = require('express');
const router = express.Router();
const controller = require('../controller/controller.js');

router.get(/^\/$|^\/console$/, controller.console);
router.get('/goods_all', controller.goods_all);
router.get('/goods_cate', controller.goods_cate);
router.get('/goods_add', controller.goods_add);
router.get('/goods_edit', controller.goods_edit);

router.get('/getGoods', controller.getGoods);

router.post('/delGoods', controller.delGoods);

router.get('/getCate', controller.getCate);

router.post('/add_goods', controller.add_goods);

router.post('/edit_goods', controller.edit_goods);

router.get('/getOneGoods', controller.getOneGoods);

module.exports = router;