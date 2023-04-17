function editRow(button) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName("td");
    for (var i = 0; i < cells.length - 1; i++) {
      var input = document.createElement("input");
      input.type = "text";
      input.value = cells[i].innerHTML;
      cells[i].innerHTML = "";
      cells[i].appendChild(input);
    }
    button.innerHTML = "Save";
    button.onclick = function() { saveRow(button); };
  }

  function saveRow(button) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName("td");
    for (var i = 0; i < cells.length - 1; i++) {
      cells[i].innerHTML = cells[i].getElementsByTagName("input")[0].value;
    }
    button.innerHTML = "Edit";
    button.onclick = function() { editRow(button); };
  }

  function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
