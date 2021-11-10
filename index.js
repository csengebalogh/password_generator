#!/usr/bin/env node
const program = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')
const cl = console.log
const createPassword = require('./utils/createPassword')
const savePassword = require('./utils/savePassword')

program.version('1.0.0').description('Simple Password Generator')

/* .option method: custom options to -h --help
  3rd argument: default length

  save command: 3rd arg: false by default

  symbols and numbers are wanted by default: set 3rd arg to true

length needs a value to pass in (<length>)

*/



program
  .option('-l, --length <length>', 'length or password', '8')
  .option('-s, --save', 'save password to psws.txt',)
  .option('-nn, --no-numbers', 'remove numbers from generated password')
  .option('-ns, --no-symbols', 'remove symbols from generated password')
  .parse()

//outputs an object of the options and their values
// console.log(program.opts())

const { length, save, numbers, symbols} = program.opts()

// get generated password 

const generatedPassword = createPassword(length, numbers, symbols)

// Save pasword

if(save) {
  savePassword(generatedPassword)
}

//copy to clipboard

clipboardy.writeSync(generatedPassword)

//Output generated password

cl(chalk.blue.bold('Generated password: ') + chalk.bold(generatedPassword))
cl(chalk.yellow('Password has been copied to clipboard!'))

