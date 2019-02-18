(function (exports) {
    function NoteListView(noteList){

    }

    NoteListView.prototype.printNotes = function (noteList) {
        for (var i = 0; i < noteList.showNotes().length; i++) {
            console.log(noteList.showNotes()[i].showNoteText())
            return noteList.showNotes()[i].showNoteText()

        }
    };

    exports.noteListView = new NoteListView()
    console.log("notelist View list working")

})(this);
