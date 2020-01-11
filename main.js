let nowDate = new Date();

let note = {
    text: "sdsd"
};

let textNote = document.querySelector('.note');
function saveNote(){
    note.text = textNote.value;
    note.date = nowDate.toLocaleString();
    console.log(note);
    localStorage.setItem ("note", JSON.stringify(note));
    // note1 = JSON.parse (localStorage.getItem ("note"));
    // console.log(note1);
};

window.onunload = function saveNote1(){
    note.text = "Helo!2";
    note.date = nowDate.toLocaleString();
    console.log(note);
    localStorage.setItem ("note", JSON.stringify(note));
};





