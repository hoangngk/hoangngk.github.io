var index = 0;
function btnAddClick() {
    var job = document.querySelector('#inputJob').value;

    if (!(job === '' | job.length == 0)) {

        var jobList = document.querySelector('.jobList');
        jobList.innerHTML = jobList.innerHTML + '<div id=\"job_' + index + '\"><div class=\'row\'><p class=\'col-9\'>' + job + '</p><button class=\'col-3 btn btn-danger\' onClick=\"btnDeleteClick(' + index + ')\">Delete</button></div><br/></div>';

        index++;
        job = '';
    }
}

function btnDeleteClick(jobIndex) {
    document.querySelector('#job_' + jobIndex).remove();
}