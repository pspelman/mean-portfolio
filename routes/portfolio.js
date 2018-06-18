var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


mongoose.Promise = global.Promise;

// router.get('/', function (req, res) {
//     console.log(`reached the quotes router`,);
//     res.json({'message': 'You made it...congrats'});
// });


router.all("*", (req,res,next) => {
    console.log(`reached wildcard route...need to redirect to Angular templates`,);
    res.sendFile(path.resolve("./ang-grayport/dist/ang-grayport/index.html"));
});


module.exports = router;
