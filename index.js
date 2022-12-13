document.addEventListener("DOMContentLoaded", () => {
  let grabSubmitForm = document.getElementById('create-task-form')
  grabSubmitForm.addEventListener('submit', (action) => {
    action.preventDefault()
    console.log(action.target.new_task_description.value)
    newTask(action.target.new_task_description.value);
  });
  function newTask (task){
    let li = document.createElement('li')
    let x = document.createElement('button')
    x.textContent = ' X'
    x.addEventListener('click', ()=>{
      li.remove();
    })
    li.textContent = `${task} `;
    document.querySelector('#tasks').appendChild(li)
    li.appendChild(x)
    }
});
