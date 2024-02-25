const Skill = require('../models/skill');

function index(req, res) {
  // get all skills
  const skills = Skill.getAll();
  res.render('skill/index.ejs', {skills: skills});
}

function show(req, res) {
  const skill = Skill.getOne(req.params.id);
  res.render("skill/show.ejs", { skill });
}
  
  module.exports = {
    index,
    show,
  };