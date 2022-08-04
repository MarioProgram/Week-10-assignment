let id = 0
let budget = 0
let remaining = 0
document.getElementById('add').addEventListener('click', () => {
    remaining -= document.getElementById('new-due').value
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-task').value;
    row.insertCell(1).innerHTML = document.getElementById('new-due').value
    row.insertCell(2).innerHTML = document.getElementById('new-due-date').value
    row.insertCell(3).innerHTML = remaining
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-task').value = '';
    document.getElementById('new-due').value = '';
});

document.getElementById('budget-add').addEventListener('click', () => {
    budget = document.getElementById('budget-input').value
    document.getElementById('budget-amount').innerHTML = budget
    document.getElementById('budget-input').value = ''
    remaining = budget
    let table = document.getElementById('list');
    for (let i = 0; i < id; i++) {
        remaining -= table.rows[i + 1].cells[1].innerHTML
        table.rows[i + 1].cells[3].innerHTML = remaining
    }
    
})

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.classname = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log (`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);

    }
    return btn;
}
