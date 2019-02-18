var noteBody = "hello buddy";

(function (exports) {
    function Note(noteBody){
        this._noteText = noteBody;
    }

    Note.prototype.showNoteText = function () {
        return this._noteText;
    };
    exports.note = new Note(noteBody)
    console.log("working")

})(this);
