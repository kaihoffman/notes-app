var noteBody = "hello buddy";

(function (exports) {
    function Note(string){
        this._noteText = string;
    }
    Note.prototype.showNote = function () {
        return this._noteText;
    };
    exports.Note = Note
})(this);
