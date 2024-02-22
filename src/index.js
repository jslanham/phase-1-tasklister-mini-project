document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('#create-task-form')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    let task = document.createElement("li")
    task.innerHTML = event.target.querySelector('#new-task-description').value
    document.querySelector('#tasks').appendChild(task)
  })
});
