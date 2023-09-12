const noteBtn = document.getElementById('add-btn'),
  noteTitle = document.getElementById('note-title'),
  noteText = document.getElementById('note-text'),
  clear = document.querySelector(".clear")

let notesArr = [];
const getNotes = () => {
  let notes = localStorage.getItem("notes");
  if (notes === null) {
    notesArr = [];
  } else {
    notesArr = JSON.parse(notes)
  }
}

const showNotes = () => {
  getNotes();
  let html = "";

  for (const [index, element] of notesArr.entries()) {
    html += `
    <div class="note">
        <div class="note-cta">
          <p class="note-counter">Note ${index + 1}</p>
          <div class="note-cta-btn">
            <button id="${index}" onclick="deleteNote(this.id)" class="note-btn">
              <i class="fas fa-trash"></i> Delete
            </button>
            <button id="${index}" onclick="editNote(this.id)" class="note-btn edit-btn">
              <i class="fas fa-edit"></i> Edit
            </button>
          </div>
        </div>
        <hr />
        <h3 class="note-title">Title: ${element.title}</h3>
        <p class="note-text">${element.text}</p>
      </div>
    `;
  }

  let noteElm = document.getElementById('notes')
  if (notesArr.length != 0) {
    noteElm.innerHTML = html;
  } else {
    noteElm.innerHTML = "No notes added, please add a note"
  }
}
const addNote = (e) => {
  e.preventDefault();

  if (noteTitle.value == "" || noteText.value == "") {
    return alert("Please give title and description")

  } else {
    let noteObj = {
      title: noteTitle.value,
      text: noteText.value
    }

    notesArr.push(noteObj)
    localStorage.setItem("notes", JSON.stringify(notesArr))

    document.querySelector("form").reset()
  }
  getNotes()
  showNotes()
}

function deleteNote(index) {
  getNotes()
  notesArr.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesArr))
  showNotes()
}
clear.addEventListener("click", () => {
  localStorage.clear();
  showNotes()
})


function editNote(index) {
  if (noteTitle.value !== "" || noteText.value !== "") {
    return alert("Please clear the form before editing")
  }
  getNotes()
  noteTitle.value = notesArr[index].title;
  noteText.value = notesArr[index].text;

  notesArr.splice(index, 1);

  localStorage.setItem("notes", JSON.stringify(notesArr))
  showNotes()
}

// button event
noteBtn.addEventListener("click", addNote)