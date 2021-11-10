//process: object ; argv: array
//cl output: 2 URLS, node + index page
// if argument/command added: added to array (generate, hello)

console.log(process.argv)

if(process.argv[2] === 'generate') {
    console.log('Generated!')
}