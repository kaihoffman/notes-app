function testCreateNote() {
    console.log("testCreateNote: " + assert.isTrue(note.showNoteText() === noteBody))
};
testCreateNote();

function testCreateNoteList() {
    console.log("testCreateNoteList: " + assert.isTrue(noteList != null))
};
testCreateNoteList();

function testAddNoteToNoteList() {
    noteList.addNote(note);
    console.log("testAddNoteToNoteList: " + assert.isTrue(noteList.showNotes().includes(note)))
};
testAddNoteToNoteList();
