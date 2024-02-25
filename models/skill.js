const skills = [
  {id: 1001, skill: 'Visual Studio Code', experiene: '5 years'},
  {id: 1002, skill: 'React', experience: '3 years'},
  {id: 1003, skill: 'AI expert', experience: '2 years'},
  {id: 1004, skill: 'Node.js', experience: '5 years'},
  {id: 1005, skill: 'JavaScript', experience: '3 years'},
  {id: 1006, skill: 'Python', experience: '2 years'}
];
 
 function getAll() {
   return skills;
 }

 function getOne(id) {
  const skill = skills.find(s => s.id === parseInt(id));
  return skill;
 }
 
module.exports = {
   getAll,
   getOne,
 };