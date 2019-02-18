function testCreateNote() {
    console.log("testCreateNote: " + assert.isTrue(note.showNoteText() === noteBody))
};
testCreateNote();

function testCreateNoteList() {
    console.log("testCreateNoteList: " + assert.isTrue(noteList != null))
};
testCreateNoteList();
