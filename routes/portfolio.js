const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


mongoose.Promise = global.Promise;

// router.get('/', function (req, res) {
//     console.log(`reached the quotes router`,);
//     res.json({'message': 'You made it...congrats'});
// });


router.get("/research_task/", (req, res) => {
    res.status(301).redirect("http://localhost:5000")
});


router.get('/research_task/:research_task_path_forward(*)', function(req, res, next) {
    let research_task_path_forward = req.params.research_task_path_forward;
    console.log(`forwarding to research path: `,research_task_path_forward);
    // res.status(301).redirect("http://localhost:5000/");

    res.status(301).redirect("http://localhost:5000/task/" + research_task_path_forward.toString())
});

// router.get('/resume', function(req, res, next) {
//     console.log(`RESUME SHIT`);
//     res.status(200).render("GOING TO RESUME")
// });

router.all("*", (req,res,next) => {
    console.log(`reached wildcard route...need to redirect to Angular templates`,);
    res.sendFile(path.resolve("./ang-grayport/dist/ang-grayport/index.html"));
});


module.exports = router;
