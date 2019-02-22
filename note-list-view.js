(function (exports) {
    function NoteListView(noteList){

    }

    NoteListView.prototype.printNotes = function (noteList) {
        var noteHTML = ""
        for (var i = 0; i < noteList.showNotes().length; i++) {
            noteHTML += ("<div><li>" + noteList.showNotes()[i].showNote().slice(0, 20) + "</li></div>")
        }
        return noteHTML
    };

    exports.NoteListView = NoteListView
})(this);
