window.onload = () => {
    const form = document.querySelector("#main");

    var input = document.getElementById("input");
    var addbutton = document.getElementById("addbutton");

    var editItem = "";

    form.addEventListener("submit", addItem);
    items.addEventListener("click", removeItem);
};

function addItem(event) {
    event.preventDefault();

    if (addbutton.value != "Submit") {
        console.log("Hello");

        editItem.target.parentNode.childNodes[0].data
            = document.getElementById("input").value;

        addbutton.value = "Submit";
        document.getElementById("input").value = "";



        return false;
    }

    let newItem = document.getElementById("input").value;
    if (newItem == "" || newItem == null)
        return false;
    else
        document.getElementById("input").value = "";

    let li = document.createElement("li");
    li.classList.add('lists');

    let deleteButton = document.createElement("button");

    deleteButton.className =
        "btn-danger btn btn-sm float-right  delete";

    deleteButton.appendChild(document.createTextNode("Delete"));

    let editButton = document.createElement("button");

    editButton.className =
        "btn-success btn btn-sm float-right  edit";

    editButton.appendChild(document.createTextNode("Edit"));
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(deleteButton);
    li.appendChild(editButton);

    items.appendChild(li);
}

function removeItem(event) {
    event.preventDefault();
    if (event.target.classList.contains("delete")) {
        if (confirm("Want to Delete?")) {

            let li = event.target.parentNode;
            items.removeChild(li);


        }
    }
    if (event.target.classList.contains("edit")) {
        document.getElementById("input").value =
            event.target.parentNode.childNodes[0].data;
        addbutton.value = "Update";
        editItem = event;
    }
}

