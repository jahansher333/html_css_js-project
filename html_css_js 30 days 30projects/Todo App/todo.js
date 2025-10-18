let input = document.getElementById("todo-input");
let btn = document.getElementById("add-todo-btn");
let ul = document.getElementById("todo-list");

let saved = localStorage.getItem('todos');
let todos = saved ? JSON.parse(saved) : [];

function SavedTodo() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function CreateTodo(todo, index) {
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;

    let textspan = document.createElement("span");
    textspan.textContent = todo.text;
    textspan.style.margin = "0 7px";
    if (todo.completed) {
        textspan.style.textDecoration = "line-through";
    }

    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;
        textspan.style.textDecoration = todo.completed ? "line-through" : "";
        SavedTodo();
    });

    let delbtn = document.createElement("button")
    delbtn.textContent = "Delete"
    delbtn.addEventListener("click",() =>{
       todos.splice(index,1)
       SavedTodo()
       render()
    })

    li.appendChild(checkbox);
    li.appendChild(textspan);
    li.append(delbtn)
    return li;
}

function render() {
    ul.innerHTML = '';
    todos.forEach((todo, index) => {
        const note = CreateTodo(todo, index);
        ul.appendChild(note);
    });
}

function addTodo() {
    let text = input.value.trim();
    if (!text) return;

    todos.push({ text: text, completed: false });
    input.value = "";
    render();
    SavedTodo();
}

btn.addEventListener("click", addTodo);
// input.addEventListener("keydown", (e) => {
//     if (e.key == "Enter") {
//         addTodo();
//     }
// });

render();
