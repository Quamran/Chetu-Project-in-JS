var selectRow = null;


function FormSubmit() {

    var formData = readFormData();
    if (selectRow == null)
        insertNewRecord(formData);
    else
        updateRecord(formData);
    resetForm();

}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["roll"] = document.getElementById("roll").value;
    formData["marks"] = document.getElementById("marks").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.roll;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.marks;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onEdit(this) ">Edit</a> <a onClick="onDelete(this)">Delete</a>`;
                       
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("marks").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("roll").value = selectedRow.cells[1].innerHTML;
    document.getElementById("marks").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.empCode;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.city;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("studentList").deleteRow(row.rowIndex);
        resetForm();
    }
}