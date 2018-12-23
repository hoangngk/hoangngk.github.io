var data = {
  jobs: [
    {
      id: guid(),
      name: "PHP Developer"
    },
    {
      id: guid(),
      name: "Fullstack JS Developer"
    },
    {
      id: guid(),
      name: "BA"
    },
    {
      id: guid(),
      name: "QA/ Tester"
    }
  ]
};
// Create JobItem
function createJobItem(id, jobName) {
  var jobItem = document.createElement("li");
  jobItem.id = "jobItem-" + id;
  jobItem.className = "list-group-item";
  var jobName = document.createTextNode(jobName);
  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "btn btn-danger float-right";
  deleteButton.addEventListener("click", function() {
    deleteJobItem(id);
  });
  jobItem.appendChild(jobName);
  jobItem.appendChild(deleteButton);

  return jobItem;
}
function renderJobList(jobs) {
  var jobListView = document.getElementById("jobListView");
  jobs.forEach(function(job) {
    var jobItem = createJobItem(job.id, job.name);
    jobListView.appendChild(jobItem);
  });
}

renderJobList(data.jobs);

function addJob() {
  var jobName = document.querySelector("#jobNameInput").value;

  if (!(jobName === "" || jobName.length == 0)) {
    var jobListView = document.getElementById("jobListView");
    var jobItem = createJobItem(guid(), jobName);
    jobListView.appendChild(jobItem);
    var alert = document.getElementById("alertMessage");
    alert.remove();
  } else {
    var addJobForm = document.getElementById("addJobForm");
    var alert = document.createElement("div");
    alert.id = "alertMessage";
    alert.className = "alert alert-danger";
    alert.textContent = "You should type something to job name field";
    addJobForm.appendChild(alert);
  }
}

function deleteJobItem(id) {
  var jobItemToDelete = document.getElementById("jobItem-" + id);
  console.log(jobItemToDelete);
  jobItemToDelete.remove();
}

// Helpers
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
}
