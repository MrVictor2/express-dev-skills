const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');

router.get('/', skillsCtrl.index);
//GET /skills/new <-- define before show route
router.get('/new', skillsCtrl.new);
//GET /Skills/:id
router.get('/:id', skillsCtrl.show);
//POST Skills
router.post('/', skillsCtrl.create);
// DELETE / skills/ id:
router.delete('/:id', skillsCtrl.delete);




module.exports = router;

// All actual paths start with "/skills"
// router.get('/', function(req, res) {
//   res.send('This the skills route');
// });
// router.get('/find', function(req, res) {
//   res.send('this is the user in find controller');
// });
 



//module.exports = router;
 //routes/skills.js

 //var express = require('express');


 // Require the controller that exports To-Do CRUD functions

 // All actual paths begin with "/skills"
