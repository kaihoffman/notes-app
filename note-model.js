var noteBody = "hello buddy";

(function (exports) {
    function note(string){
        this._noteText = string;
    }
    note.prototype.showNote = function () {
        return this._noteText;
    };
    exports.note = note
})(this);
