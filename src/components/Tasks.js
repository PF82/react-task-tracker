//2.0.create a variable called tasks to store array of objects
//2.10.variable to be part of the state
//2.11.make tasks variable redundant
// const tasks = [
//     {
//         id: 1,
//         text: 'Doctors appointment',
//         day: 'Feb 5th at 2:30pm',
//         reminder: true,
//     },
//     {
//         id: 2,
//         text: 'Meeting at school',
//         day: 'Feb 6th at 1:30pm',
//         reminder: true,
//     },
//     {
//         id: 3,
//         text: 'Food shopping',
//         day: 'Feb 5th at 2:30pm',
//         reminder: false,
//     }
// ]

//2.12.creat a useState and import it to here; moved into Tasks.js
// import { useState } from "react"

//2.13.piece of state called tasks and function to update the state 
//2.14.set it to use state and a the default we want to use for this piece 
//of state for the tasks by pasting in the above tasks array; moved into Tasks.js
// const [tasks, setTasks] = useState([
//     {
//         id: 1,
//         text: 'Doctors appointment',
//         day: 'Feb 5th at 2:30pm',
//         reminder: true,
//     },
//     {
//         id: 2,
//         text: 'Meeting at school',
//         day: 'Feb 6th at 1:30pm',
//         reminder: true,
//     },
//     {
//         id: 3,
//         text: 'Food shopping',
//         day: 'Feb 5th at 2:30pm',
//         reminder: false,
//     }
// ])

//3.2.create import
import Task from "./Task"

//2.17.pass in the props or just destructure
const Tasks = ({ tasks }) => {
    return (
        <>
            {/* 
        2.1.map through the tasks or loop through the tasks
        2.2.do the above by creating a list by using the map array method
        2.3.dot map to create a list and map takes in a function
        2.4.create parentheses with some jsx inside
        2.5.for each task, we will call it task
        2.6.create h3 and let's say we want the task.text to get text for each one
        2.8.console warning: each child in a list should have a unique "key" prop
        2.9.parent of the list is h3 and it should have a unique key prop
        */}
            {/* {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
            ))} */}

            {/* loop though tasks */}
            {tasks.map((task) => (
                // outputting the component and pass
                // the task as a prop
                //3.3.Task component instead of h3
                //3.4.pass each task as prop
                <Task key={task.id} task={task}/>
            ))}
        </>
    )
}

export default Tasks