(function (exports) {
    function NoteListView(noteList){

    }

    NoteListView.prototype.printNotes = function (noteList) {
        for (var i = 0; i < noteList.showNotes().length; i++) {
            return ("<div><li>" + noteList.showNotes()[i]._noteText + "</li></div>")
        }
    };

    exports.NoteListView = NoteListView
})(this);
