const alpha = 'qwertzuiopőúűasdfghjkléáyxcvbnmöüóQWERTZUIOPŐÚŰASDFGHJKLÉÁYXCVBNMÖÜÓ'
const numbers = '0123456789'
const symbols = '+!%/-@&#>^$*ß÷×'

const createPassword = (length = 10, hasNumbers = true, hasSymbols = true) => {
  let chars = alpha
  hasNumbers ? (chars += numbers) : ''
  hasSymbols ? (chars += symbols) : ''

  return generatePassword(length, chars)
}

const generatePassword = (length, chars) => {

    let password = ''

    //charAt: get a char at a position given as an argument (has to be random)
    
    for (let i = 0; i <= length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length))
    }

    return password
}

module.exports = createPassword
