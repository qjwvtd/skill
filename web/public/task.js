//task,需要task.css
function Task() { };
Task.prototype.open = function () {
    var task = document.getElementById('task');
    if (task) {
        document.body.removeChild(task);
    }
    var text = 'Loading...';
    task = document.createElement('div');
    task.id = 'task';
    task.className = 'active';
    task.innerHTML = '';
    var temp = '<div class="content">' + text + '</div>';
    task.innerHTML = temp;
    document.body.appendChild(task);
}
Task.prototype.close = function () {
    var task = document.getElementById('task');
    if (task) {
        document.body.removeChild(task);
    }
}
var task = new Task();
