// Проверка существования localStorage и вставка содержимого в форму
let textNote = document.querySelector('.note');
let dateEditing = document.querySelector('.date-editing');
if (localStorage){
    let note1 = JSON.parse(localStorage.getItem ("note"));
    console.log(note1);
    textNote.value = note1.text;
    dateEditing.innerHTML = note1.date;
}

let nowDate = new Date();

let note = {
    text: "",
};

// let textNote = document.querySelector('.note');
function saveNote(){
    note.text = textNote.value;
    note.date = nowDate.toLocaleString();
    localStorage.setItem ("note", JSON.stringify(note));
};

window.onunload = saveNote;