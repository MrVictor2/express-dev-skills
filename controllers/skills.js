const Skill = require('../models/skill');

//function to create a new skill
function create(req, res) {
  console.log(req.body);
  Skill.create(req.body);
  res.redirect('/skills');

}

function index(req, res) {
  // Get all skills
  const skills = Skill.getAll();
  // Render the index view with the skills data
  res.render('skill/index', { skills: skills,
    title: 'All Skills'
});
}

function show(req, res) {
  // Get the skill by ID
  const skill = Skill.getOne(req.params.id);
  // Render the show view with the skill data
  res.render('skill/show', {
    skill: skill,
    title: 'Skill Details'
  });
}

function newSkill(req, res) {
  // Render the form to create a new skill
  res.render('skill/new', { title: 'New Skill' });
}

function deleteSkill(req, res) {
  // Delete the skill by ID
  Skill.deleteSkill(req.params.id);
  
  // Redirect to the skills index after deletion
  res.redirect('/skill');
}

function edit(req, res) {
 const skill = Skill.getOne(req.params.id);
 res.render('skill/edit', {
  title: 'Edit skill',
  skill

 })
}
function update(req, res) {
  Skill.update(req.params.id, req,body);
  res.redirect(`/skill/${req.params.id}`);
}

module.exports = {
  edit,
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  update
};
