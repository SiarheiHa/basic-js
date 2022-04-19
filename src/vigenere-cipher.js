const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

 class VigenereCipheringMachine {
  constructor (direct) {
    this.direct = direct
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!')
    let kf = Math.ceil(message.length / key.length)
    key = key.repeat(kf).split('')
    let spaces = Array.from(message.split('').entries()).filter((i) => i[1] == ' ').map(el => el[0])    
    spaces.forEach(el => key.splice(el, 0, ' '))
    key = key.join('').toUpperCase()
    message = message.toUpperCase()

    let codeA = 'A'.charCodeAt()
    let abcCount = 26
    let result = []

    for ( let i =0; i < message.length; i++ ) {
      if (message[i].charCodeAt() < codeA || message[i].charCodeAt() > codeA + abcCount) {
        result.push(message[i])
      } else {
        let letterIndex = message.charCodeAt(i) - codeA
        let shift = key.charCodeAt(i) - codeA
        let letter = String.fromCharCode(codeA + (letterIndex + shift) % abcCount)
        result.push(letter)
      }
    }
  this.direct === false ? result = result.reverse().join('') : result = result.join('')
  return result    
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!')
    let kf = Math.ceil(message.length / key.length)
    key = key.repeat(kf).split('')
    let spaces = Array.from(message.split('').entries()).filter((i) => i[1] == ' ').map(el => el[0])    
    spaces.forEach(el => key.splice(el, 0, ' '))
    key = key.join('').toUpperCase()
    message = message.toUpperCase()

    let codeA = 'A'.charCodeAt()
    let abcCount = 26
    let result = []

    for ( let i =0; i < message.length; i++ ) {
      if (message[i].charCodeAt() < codeA || message[i].charCodeAt() > codeA + abcCount) {
        result.push(message[i])
      } else {
        let letterIndex = message.charCodeAt(i) - codeA
        let shift = key.charCodeAt(i) - codeA
        let letter = String.fromCharCode(codeA + (letterIndex - shift + abcCount) % abcCount)
        result.push(letter)
      }
    }
  this.direct === false ? result = result.reverse().join('') : result = result.join('')
  return result
  }
}

module.exports = {
  VigenereCipheringMachine
};
