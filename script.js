const addTodoBtn = document.querySelector(".add-todo .checked");
const toDoListBoard = document.querySelector(".list-todo");
const dayNightBtn = document.querySelector(".on-off");
const mainBox = document.querySelector(".main-box");
const allListBtn = document.querySelector(".all-list");
const activeListBtn = document.querySelector(".active-list");
const completedListBtn = document.querySelector(".completed-list");
const userTodoData = [];
let tabelNode;
let tabelNode2;
let allListData;
let dayNight = false;
let counter = 1;
addTodoBtn.addEventListener("click", function (e) {
  //getting the text area value
  let toDoText = document.getElementById("input-todo").value;
  if (toDoText) {
    //storing the value in the array
    userTodoData.push(toDoText);
    //changing the check box style
    addTodoBtn.style.setProperty(
      "background-image",
      "url('./images/icon-check.svg')"
    );
    setTimeout(() => {
      addTodoBtn.style.removeProperty("background-image");
    }, 150);
    //clearing the the text area value
    document.getElementById("input-todo").value = "";
    //Creating new elemets
    const toDoLists = document.createElement("div");
    toDoLists.classList.add(`todo-num`);
    toDoLists.innerHTML = ` <div class="add-todo">
  <div onClick = 'checkedBtn(event)' class="radio">
    <input type="radio" class="checkBox" />
    <span class="checked"></span>
  </div>
  <div class="list-data">
    ${userTodoData[counter - 1]}
  </div>
  <div onClick = 'deletePost(event)' class="delete-todo"></div>
</div>`;
    toDoListBoard.prepend(toDoLists.cloneNode(true));
    counter++;
  }
});

dayNightBtn.addEventListener("click", function () {
  if (dayNight == true) {
    dayNightBtn.classList.add("day-night");
    mainBox.classList.add("main-box-switch");
    dayNight = false;
  } else {
    dayNightBtn.classList.remove("day-night");
    mainBox.classList.remove("main-box-switch");
    dayNight = true;
  }
});

const checkedBtn = (event) => {
  event.target.classList.toggle("completedToDo");
  tabelNode = event.target.parentNode;
  tabelNode.nextElementSibling.classList.toggle("deleted-text");
};

const deletePost = (event) => {
  tabelNode2 = event.target.previousElementSibling;
  if (tabelNode2.classList.contains("deleted-text")) {
    event.target.parentElement.remove();
  }
};

allListBtn.addEventListener("click", function () {
  allListData = document.querySelectorAll(".list-todo .todo-num");
  allListData.forEach((val) => {
    val.classList.remove("display-none");
  });
});

activeListBtn.addEventListener("click", function () {
  allListData = document.querySelectorAll(".list-todo .radio");
  allListData.forEach((val) => {
    if (!val.lastElementChild.classList.contains("completedToDo")) {
      if (val.parentElement.parentElement.classList.contains("display-none")) {
        val.parentElement.parentElement.classList.remove("display-none");
      }
    } else {
      val.parentElement.parentElement.classList.add("display-none");
    }
  });
});

completedListBtn.addEventListener("click", function () {
  allListData = document.querySelectorAll(".list-todo .radio");
  allListData.forEach((val) => {
    if (val.lastElementChild.classList.contains("completedToDo")) {
      if (val.parentElement.parentElement.classList.contains("display-none")) {
        val.parentElement.parentElement.classList.remove("display-none");
      }
    } else {
      val.parentElement.parentElement.classList.add("display-none");
    }
  });
});