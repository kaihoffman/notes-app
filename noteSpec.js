testnote = new note("hello, buddy");
noteList = new noteList();

function testCreateNote() {
    console.log("testCreateNote: " + assert.isTrue(testnote.showNote() === "hello, buddy"))
};
testCreateNote();

function testCreateNoteList() {
    console.log("testCreateNoteList: " + assert.isTrue(noteList != null))
};
testCreateNoteList();

function testAddNoteToNoteList() {
    noteList.addNote(testnote);
    console.log("testAddNoteToNoteList: " + assert.isTrue(noteList.showNotes().includes(testnote)))
};
testAddNoteToNoteList();

function testPrintNotes() {
    noteList.addNote(note);
    console.log("testPrintNotes: " + assert.isTrue(noteListView.printNotes(noteList) === ("<div><li>" + testnote.showNote() + "</li></div>")))
};
testPrintNotes();
