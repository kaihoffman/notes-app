testnote = new Note("hello, buddy");
noteList = new noteList();
notelistview = new NoteListView();
noteView = new noteView(testnote);

window.onload = function() {
createPageElements();
// testNotesToHTML();

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
    noteList.addNote(testnote);
    console.log("testPrintNotes: " + assert.contains(notelistview.printNotes(noteList), ("<div><li> hello, buddy</li></div>")))
};
testPrintNotes();

function testPrintNotesTruncatesLongNotes() {
    longnote = new Note("This is a long note with far more than 20 characters lorem ipsum sit amet etcetera")
    noteList.addNote(longnote)
    console.log("Truncating Long Notes: " + assert.contains(notelistview.printNotes(noteList), ("<div><li>This is a long note </li></div>")))
}
testPrintNotesTruncatesLongNotes()

function testSingleNoteView() {
    noteList.addNote(testnote);
    console.log("testSingleNoteView: " + assert.contains(noteView.showSingleNote(testnote), ("<div>" + testnote + "</div>")))
};
testSingleNoteView();
};


function createPageElements() {
    // var div = document.createElement('div');
    // div.id = 'app';
    // this.createHTMLElements = function () {
    //     var div = document.createElement('div', {'id':'app'});
    //     var testpara = document.createTextNode("Test paragraph");
    //     return div;
    // }
    // this.createHTMLElements();
    //
    // // document.body.appendChild(div);
    // document.getElementById('app').appendChild(testpara)
    var testAppDiv = document.createElement('div');
    testAppDiv.id = 'app'
    document.body.appendChild(testAppDiv);
};
