// variable declaration region

// get the form add items
let form = document.getElementById("addForm");

// get the input field's value
let input = document.getElementById("item");

// get the list of items
let listItems = document.getElementById("items");

// get the filter input
let filter = document.getElementById("filter");





// adding event listeners

// listen for submit events
form.addEventListener("submit", addItem);

// adding the event listener for the list of items for click
listItems.addEventListener("click", removeItem)

// add keydown event for filter
filter.addEventListener("keyup", filterInput)


// adding functionality

// addItem function
function addItem(e) {
    // prevent the default action of submitting
    e.preventDefault();

    // creating a list item
    let li = document.createElement("li");
    li.className = "list-group-item";

    // add the input value to the li element
    li.appendChild(document.createTextNode(input.value));

    // create a button to add to the li
    let button = document.createElement("button");
    button.className = "btn btn-danger btn-sm float-right delete";
    button.appendChild(document.createTextNode("X"));
    li.appendChild(button);

    // append the li to the list items
    listItems.appendChild(li);

    // clear the input field
    input.value = "";
}

// remove Item function
function removeItem(e) {
    if(e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.removeChild(e.target.parentElement);
    }
}

// create a filter input function
function filterInput(e) {
   let text = e.target.value.toLowerCase();
   let listItems = document.getElementsByTagName("li");

   Array.from(listItems).forEach(function(item) {
       let txt = item.firstChild.textContent.toLowerCase();
       if(txt.indexOf(text) != -1) item.style.display = "block";
       else item.style.display = "none";
   });
}