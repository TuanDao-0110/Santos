class Tasks {
  constructor() {
    this.tasks = [];
  }

  /** @param {string} csvString */
  importCsv(csvString) {
    // this.tasks.push(csvString)
  // this.tasks=  this.tasks.concat(csvString.split(','))
    // console.log(this.tasks)
 this.tasks = csvString.split(',')
  }
  getCount() {
    return this.tasks.length
  }
  getFirst() {
    return this.tasks[0]
  }
  getLast() {
    return this.tasks[this.tasks.length - 1]
  }
  getUnformattedTasks() {
    let temp = ''
    // return this.tasks.toLocaleString()
    return this.tasks.map((e) => {
      return e.toLowerCase()
    })
  }

}

//Sample usage do not modify (but feel free to read)
const dropdown = document.querySelector('#csv-dropdown');
const tbody = document.querySelector('#tbody');

const tasks = new Tasks();

function render() {
  tbody.innerHTML = '';
  tasks.tasks.forEach(function (task) {
    tbody.insertAdjacentHTML(
      'beforeend',
      `<tr>
            <th>Task</th>
            <td>${task}</td>
        </tr>`
    );
  });
  tbody.insertAdjacentHTML(
    'beforeend',
    `<tr class="separator">
            <th>Number of tasks</th>
            <td>${tasks.getCount()}</td>
        </tr>
        <tr>
            <th>First task</th>
            <td>${tasks.getFirst()}</td>
        </tr>
        <tr>
            <th>Last task</th>
            <td>${tasks.getLast()}</td>
        </tr>
        <tr>
            <th>Lower-cased tasks</th>
            <td>${tasks.getUnformattedTasks()}</td>
        </tr>
        `
  );
}

dropdown.addEventListener('change', (event) => {
  tasks.importCsv(dropdown.value);
  render();
});
