(function (exports) {
    function NoteList(){
        this._notes = [];
    }

    NoteList.prototype.showNotes = function () {
        return this._notes;
    };

    NoteList.prototype.addNote = function (note) {
        this._notes.push(note);
    };

    exports.noteList = new NoteList()
    console.log("note list working")

})(this);
