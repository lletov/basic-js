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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  subArr = members.filter(el => typeof(el) === 'string');
  subArr.sort((a, b) => a.localeCompare(b, "en"));
  // let res;
  // subArr.forEach(element => {
  //   element[0]
  // });
  return subArr.map((animal) => animal[0].toUpperCase()).join('')
}

module.exports = {
  createDreamTeam
};
