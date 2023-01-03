var selectedRow = null;

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}
function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById('name').value;
    formData["lastName"] = document.getElementById('lastName').value;
    formData["age"] = document.getElementById('age').value;
    return formData;
}
function insertNewRecord(data) {
    var table = document.getElementById('alumnList').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.lenght);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lastName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.age;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onclick= "onEdit(this)"> Edit</a>
                       <a onclick= "onDelete(this)"> Delete</a>`;
}
function resetForm() {
    document.getElementById('name').value = "";
    document.getElementById('lastName').value = "";
    document.getElementById('age').value = "";
    var selectedRow = null;
}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('name').value = selectedRow.cells[0].innerHTML;
    document.getElementById('lastName').value = selectedRow.cells[1].innerHTML;
    document.getElementById('age').value = selectedRow.cells[2].innerHTML;

}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.lastName;
    selectedRow.cells[2].innerHTML = formData.age;

}
function onDelete(td) {
    if (confirm('Are you sure to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('alumnList').deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById('name').value == "") {
        isValid = false;
        document.getElementById('nameValidationError').classList.remove("hide");
    } else {
        isValid = true;
        if (document.getElementById('nameValidationError').classList.contains("hide"))
            document.getElementById('nameValidationError').classList.add("hide");
    }
    return isValid;
};