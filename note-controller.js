(function (exports) {
    function Controller(notelist){
        notelist.addNote('favourite drink: seltzer');
        this.NoteListView = new NoteListView(notelist)
    }
        Controller.prototype.notesToHTML = function () {
            document.getElementById('app').innerHTML = this.NoteListView.printNotes(notelist)
        };
    exports.Controller = Controller;
})(this);

notelist = new noteList()
notecontrol = new Controller(notelist);
notecontrol.notesToHTML();
