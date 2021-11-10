const program = require('commander')

//parse method
//node index -V -gives version 1.0.0

program.version('1.0.0').description('Simple Password Generator')

// create command: command method
//action: takes in a function which runs on node index [command name]


program
  .command('generate')
  .action(() => {
    console.log('Generated!')
}).option
  .parse()
