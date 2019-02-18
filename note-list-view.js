(function (exports) {
    function NoteListView(noteList){

    }

    NoteListView.prototype.printNotes = function (noteList) {
        for (var i = 0; i < noteList.showNotes().length; i++) {
            return ("<div><li>" + noteList.showNotes()[i].showNoteText() + "</li></div>")
        }
    };

    exports.noteListView = new NoteListView()
    console.log("notelist View list working")

})(this);
