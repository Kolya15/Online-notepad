let nowDate = new Date();

let note = {
    text: "sdsd"
};

let textNote = document.querySelector('.note');
let note1;
function saveNote(){
    note.text = textNote.value;
    note.date = nowDate.toLocaleString();
    localStorage.setItem ("note", JSON.stringify(note));
    note1 = JSON.parse (localStorage.getItem ("note"));
    console.log(note1);
};


window.onbeforeunload = function saveNote1(){

};

