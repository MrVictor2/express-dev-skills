const skills = [
  {id: 1001, skill: 'Visual Studio Code', experience: '5 years'},
  {id: 1002, skill: 'React', experience: '3 years'},
  {id: 1003, skill: 'AI expert', experience: '2 years'},
  {id: 1004, skill: 'Node.js', experience: '5 years'},
  {id: 1005, skill: 'JavaScript', experience: '3 years'},
  {id: 1006, skill: 'Python', experience: '2 years'}
];
 
function create(skill) {
  skill.id = Date.now() % 1000000;
  //add a line to to make the new skill show up
  //<----add code line here ---->
  skills.push(skill);

}
 function getAll() {
   return skills;
 }

 function getOne(id) {
  const skill = skills.find(s => s.id === parseInt(id));
  return skill;
 }
 function deleteSkill(id) {
  id = parseInt(id);
  // find the index for the skill
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1)
 }

 function update(id, updatedSkill) {
  id= parseInt(id);
  const skill = skill.find(skill => skill.id === id);
  skill.skill = updatedSkill.skill;
 }
module.exports = {
   getAll,
   getOne,
   create,
   deleteSkill,
   update
 };