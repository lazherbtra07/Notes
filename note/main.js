const niteContainer = document.querySelector(".note-contanier ")
const createBtn = document.querySelector(".btn")
let notes = document.querySelectorAll(".input-box")

function showNote(){
  niteContainer.innerHTML = localStorage.getItem("notes")
}
showNote();

function updateStorage() {
  localStorage.setItem("notes", niteContainer.innerHTML)
}

createBtn.addEventListener("click", () =>{
  let inputBox = document.createElement("p")
  let img = document.createElement("img")
  inputBox.className = "input-box"
  inputBox.setAttribute("contenteditable", "true")
  img.src = "./images/delete.png"
  niteContainer.appendChild(inputBox).appendChild(img)
})

niteContainer.addEventListener("click", function(e) {
  if(e.target.tagName === "IMG"){
    e.target.parentElement.remove()
    updateStorage()
  }
  else if(e.target.tagName === "P"){
    notes = document.querySelectorAll(".input-box")
    notes.forEach(nt =>{
      nt.onkeyup = function(){
        updateStorage()
      }
    })
  }
})
