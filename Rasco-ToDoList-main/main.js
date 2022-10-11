let todoinput = document.querySelector(".todo-input");
let todobutton = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");
let fliterOpthion = document.querySelector(".filter-todo");

todobutton.addEventListener("click", function (event) {
  let todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  let soundcreat = document.querySelector(".sound-creat");
  soundcreat.play();

  let copmpletedbutton = document.createElement("button");
  copmpletedbutton.innerHTML = `<i class="fas fa-check-double"></i>`;
  copmpletedbutton.classList.add("complete-btn");
  todoDiv.appendChild(copmpletedbutton);

  let newTodo = document.createElement("li");
  newTodo.innerHTML = todoinput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  let trashbutton = document.createElement("button");
  trashbutton.innerHTML = `<i class="fas fa-trash"></i>`;
  trashbutton.classList.add("trash-btn");
  todoDiv.appendChild(trashbutton);

  todoList.appendChild(todoDiv);

  todoinput.focus();
  todoinput.value = "";
});

todoList.addEventListener("click", function (eo) {
  if (eo.target.classList.contains("fa-trash")) {
    let sounddelet = document.querySelector(".sound-delet");
    sounddelet.play();
    eo.target.parentElement.parentElement.classList.add("fall");

    function removeitem() {
      eo.target.parentElement.parentElement.remove();
    }
    setTimeout(removeitem, 1000);
  }

  if (eo.target.classList.contains("fa-check-double")) {
    eo.target.parentElement.parentElement.classList.toggle("completed");
    eo.target.classList.toggle("green");
    let sounddone = document.querySelector(".sound-done");
    sounddone.play();
  }
});

fliterOpthion.addEventListener("click", function (eo) {
  let todos = todoList.childNodes;
  let todosarray = Array.from(todos);
  let optionvalue = eo.target.value;

  let todo = document.querySelectorAll(".todo");
  let todoarray = Array.from(todo);

  todoarray.forEach((ele) => {
    if (optionvalue == "all") {
      ele.style.display = "flex";
    } else if (optionvalue == "completed") {
      let completelmet = ele.classList.contains("completed");
      console.log(completelmet)
      // ele.style.display = "flex";
    }
  });
});

// todos.forEach((element) => {
//   console.log(optionvalue);
//   switch (optionvalue) {
//     case "all":
//       element.style.display = "flex";
//       break;
//     case "completed":
//       if (element.classList.contains("completed")) {
//         element.style.display = "flex";
//       } else {
//         element.style.display = "none";
//       }
//   }
// });

// todo.forEach((element) => {
//   if (optionvalue == "all") {

//   } else if (optionvalue == "completed") {
//     let completeitem = element.classList.contains("completed");
//     element.style.display = "none";
//     completeitem.style.display = "flex";
//   } else if (optionvalue == "uncompleted") {
//     let uncompleteitem = !element.classList.contains("completed");
//     console.log(uncompleteitem);
//   }
// });

// todosarray.forEach((todofunc) => {
//   if (optionvalue == "all") {
//     console.log(todofunc);
//   } else if (optionvalue == "completed") {
//     console.log(todofunc.classList.contains("completed"));
//   }
// });
