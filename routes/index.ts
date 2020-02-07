/*
 * GET home page.
 */
import express = require('express');
const router = express.Router();

var getData = function () {
    var data = {
        'item1': 'http://public-domain-photos.com/free-stock-photos-1/flowers/cactus-76.jpg',
        'item2': 'http://public-domain-photos.com/free-stock-photos-1/flowers/cactus-77.jpg',
        'item3': 'http://public-domain-photos.com/free-stock-photos-1/flowers/cactus-78.jpg'
    }
    return data;
}
var test = '';
router.get('/', (req: express.Request, res: express.Response) => {
    res.render('index', { title: 'Express', "data": getData() });
});

export default router;