const Skill = require('../modules/skill');

function create(req, res) {
  console.log(req.body);
  // The model is responsible for creating data
  // skill.create(req.body);
  // Do a redirect anytime data is changed
  res.redirect('/skills');
}
function index(req, res) {
  // get all skills
  const skills = Skill.getAll();
  res.render('skill/index.ejs', {skills: skills});
}

function show(req, res) {
  res.render('skills/show', {
    skills: Skill.getOne(req.params.id),
    // Don't forget to add the comma above
    title: 'Skill Details'
  });
}
// function index(req, res) {
//   res.render('skills/index', {
//     skills: Skill.getAll(),
//     title: 'All Skills',
//     create,
//     delete: deleteSkill
//   });
// }

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill
};

function newSkill(req, res){
  res.render('skills/new', {title: 'New Skill'});

}

function deleteSkill(req, res) {
  Skill.deleteSkill(req.params.id);
  res.redirect('/skills');
}