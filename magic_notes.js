console.log("notes app");
showNotes();
//if user adds the add to the local storage
let addbtn = document.getElementById('add_btn');


addbtn.addEventListener('click', (e) => {
    let add_text = document.getElementById('add_text');
    let title = document.getElementById('add_title');
    // console.log(add_text);

    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes) //makes js object
    }
    let myobj ={
        title : add_text.value,
        text : add_title.value
    }
    notesobj.push(myobj);
    localStorage.setItem("notes", JSON.stringify(rowobj));//local storage to be filled by only strings


    add_text.value = "";
    add_title.value = "";

    console.log(notesobj);

    showNotes();

})

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes); //makes js object
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Title :  ${element.title}</h5>
          <p class="card-text">${element.text}</p>
          <button id="${index} "onclick="deleteNote(this.id)" class="btn btn-primary">Delete</a>
        </div>
      </div>`
    });

    let notesele = document.getElementById('notes');
    if (notesobj.length != 0) {
        notesele.innerHTML = html;
    }
    else {
        notesele.innerHTML = `<h5>No notes available............</h5>`;
    }
}

function deleteNote(index){
    console.log("deleting",index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes); //makes js object
    }
    
    notesobj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesobj));//local storage to be filled by only strings
    showNotes();
}

let search_text = document.getElementById('search_text');
search_text.addEventListener("input",()=>{
    // console.log("input event");
    inputval = search_text.value.toLowerCase();
    // console.log("the input value is : ",inputval);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach((element)=>{
        let cardtext = element.getElementsByTagName("p")[0].innerText;
        // console.log(cardtext); 
        if(cardtext.includes(inputval)){
            element.style.display = "block";
        }  
        else{
            element.style.display = "none";
        }
    })
})