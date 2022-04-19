const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let arr = []
  let team = ''
  if (!Array.isArray(members)) {
    return false
  }
  members.map((el) => typeof el === 'string' ? arr.push(el.toUpperCase().replace(/\s+/g, ' ').replace(/^\s/, '')) : el )
  arr.sort()
  for (member of arr) { 
    if(member.match(/\b[A-Z]/i) !== null) {
    team += member.match(/\b[A-Z]/i)    
    } 
  }
  return team
}

module.exports = {
  createDreamTeam
};
