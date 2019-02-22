(function (exports){
    function noteView(notemodel) {

    }
    noteView.prototype.showSingleNote = function(notemodel) {
        var singlenote = ("<div>" + notemodel + "</div>")
        return singlenote;
    }
    exports.noteView = noteView
})(this);
