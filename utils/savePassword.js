const fs = require('fs') // file system
const path = require('path')
const os = require('os')
const chalk = require('chalk')

// save psws to  file called [file name], also make the file if it does not exists

// fs: first arg: location of file
function savePassword (password) {
  fs.open(path.join(__dirname, '../', 'passwords.txt'), 'a', 666, (e, id) => {
    fs.write(id, password + os.EOL, null, 'utf-8', () => {
      fs.close(id, () => {
        console.log(chalk.bold.green('Password saved to passwords.txt'))
      })
    }) // end of lien EOL
  })
}

module.exports = savePassword

/* if unable to open file:
(NoPermissions (FileSystemError):
Error: EACCES: permission denied, open

run the following: sudo chmod a+rwx <Filename>

*/
