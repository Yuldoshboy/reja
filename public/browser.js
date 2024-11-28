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
    if (confirm("Are you sure to delete this item?")) {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
          alert("Successfully deleted!");
        })
        .catch((err) => {
          console.log("Please try again!");         
        });    
    }
    else {
        alert("You rejected the deletion of the item(s)!")
      }
  }

  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt("O'zgartirish kiriting",
      e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
    );
    if (userInput) {
      axios
        .post("/edit-item", {
          id: e.target.getAttribute("data-id"),
          new_input: userInput,
        })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput;
        })
        .catch((err) => {
          console.log("Error. Please try again!")
        })

    }
  }
});

document.getElementById("clean-all").addEventListener("click", function () {
  axios.post("/delete-all", { delete_all: true }).then(response => {
    confirm("Are you sure to delete all items on the list?");
    document.location.reload();
  })
})
