// const {default: axios} = require("axios");
// const { response } = require("../app");

function itemTemp(item) {
  return `<li 
    class="list-group-item list list-group-item-info d-flex align-items-center justify-content-between">
                    <span class="item-text">${item.reja}</span>
                    <div>
                        <button 
                        data-id="${item._id}" 
                        class="edit-me btn bnt-secondary btn-sm mr-1"
                        >
                        O'zgartirish
                        </button>
                        <button 
                        data-id="${item._id}" 
                        class="delete-me btn btn-danger btn-sm"
                        >O'chirish</button>
                    </div>        
                </li>`;
}
console.log("Frontend JS ishga tushdi!");
let createField = document.getElementById("create-field");
document.getElementById("create-form").addEventListener("submit", (e) => {
  e.preventDefault();

  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemp(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("Please try again!");
    });
});

document.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Aniq o'chirmoqchimisiz?")) {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("Please try again!");
        });
    }
    alert("Siz delete tugmasini bosdinggiz!");
  }
  if (e.target.classList.contains("edit-me")) {
    alert("Siz edit tugmasini bosdinggiz!");
  }
});
