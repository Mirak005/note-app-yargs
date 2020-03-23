const fs = require("fs");


//Add note
function addNote(title, body) {
  const newNote = { title, body };
  const file = JSON.parse(fs.readFileSync("./notes.json", "utf-8"));
  const data = [newNote, ...file];
  fs.writeFileSync("./notes.json", JSON.stringify(data));
  console.log(
    `Note :{title: ${newNote.title} , body:${newNote.body} } added with success !!`
  );
}

//Read Note 
function readNote(title) {
  const file = JSON.parse(fs.readFileSync("./notes.json", "utf-8"));
  const note = file.find(note => note.title === title);
  console.log(`Searching Result : `, note);
}

//remove note 
function removeNote(title) {
  const file = JSON.parse(fs.readFileSync("./notes.json", "utf-8"));
  const updatedFile = file.filter(note => note.title !== title);
  const note = file.find(note => note.title === title);
  const data = [...updatedFile];
  fs.writeFileSync("./notes.json", JSON.stringify(data));

  console.log(`Note Removed : `, note);
}

//List read notes
function listNotes(){
    const file = JSON.parse(fs.readFileSync("./notes.json", "utf-8"));
  console.log("List of Notes : \n" , file)

}


module.exports = {
  addNote,
  removeNote,
  readNote,
  listNotes
};
