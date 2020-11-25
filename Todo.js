let input = prompt("what would you like to do?");
const ToDo = ['Collect chicken eggs', 'Clean litter box'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('**************');
        for (let i = 0; i < ToDo.length; i++) {
            console.log(`${i}: ${ToDo[i]}`);
        }
        console.log('**************');
    } else if (input === 'new') {
        const newToDo = prompt('What is the new todo?');
        ToDo.push(newToDo);
        console.log(`${newToDo} is added to list`);
    } else if (input === 'delete') {
        const index = prompt('what index would you like to delete');
        const deleted = ToDo.splice(index, 1);
        console.log(`You deleted ${deleted[0]}`);
    }
    input = prompt('what would you like to do?');
}
console.log("Ok, you quit the app");