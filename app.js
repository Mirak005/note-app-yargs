//Core Module & third party module
const yargs = require("yargs");
//Local Modules
const { readNote, removeNote, addNote, listNotes } = require("./myFunctions");

//Help commands
yargs
  .scriptName("Note-App : ")
  .command("read", "--title  [title] ")
  .command("add", "--title  [title] --body [body] ")
  .command("remove", "--remove [title] ")
  .command("list", "Get the list of notes")
  .help().argv;

//yargs.argv is an object containing the value of this flags
//each time you run the app and type a flag , it will be stored in yargs.argv
//console.log(yargs.argv)
// {
//   _: [ 'add' ],       //command
//   title: 'title flag', // flag
//   body: 'body flag',//flag
//   '$0': 'Note-App'

// }

//Command typed
const cmd = yargs.argv._[0];

//value of the flags --title / --body or short flag -t / -b
const title = yargs.argv.title || yargs.argv.t;
const body = yargs.argv.body || yargs.argv.b;

switch (cmd) {
  case "add":
    addNote(title, body);
    break;

  case "read":
    readNote(title);
    break;

  case "remove":
    removeNote(title);
    break;
  case "list":
    listNotes();
    break;

  default:
    console.log(
      "\n ERROR!!!: Unknown Command \n Type --help to see the list off commands"
    );
}
