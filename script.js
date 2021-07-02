var numberTask = 1;

function addTask() {
  var isUrgent = $('#urgent').is(':checked');
  var divClass = "card";
  if (isUrgent) {
    divClass +=" alert-danger";
  }
  var task = $('#task').val();
    $('#list').append(`
      <div class="` + divClass + `" id="` + numberTask + `">
        <div class="card-body">
          <div class="card-body">
            <h5>` + task + `</h5>
          </div>
        </div>
        <div class="card-footer text-muted">
          <a href="#" class="btn btn-secondary" onclick="return removeTask(` + numberTask + `);"><i class="las la-trash"></i></a>
        </div>
      </div>
      `);
    ++numberTask;
    return false;
}

function removeTask(idTask) {
  $(`#` + idTask).remove();
  return false;
}