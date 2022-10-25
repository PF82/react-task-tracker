// // PROPS EXAMPLE

// const App = () => {
//   return (
//     <div className="container">
//       {/* if we want to pass stuff in here, we can use props  */}
//       <Header title='Hello' />
//     </div>
//   );
// }


// // DEFAULT PROPS EXAMPLE

// const App = () => {
//   return (
//     <div className="container">
//       {/* if we don't want to pass anything in here */}
//       <Header />
//     </div>
//   );
// }


// // PROP TYPES EXAMPLE

// const App = () => {
//   return (
//     <div className="container">
//       <Header title={1} />
//     </div>
//   );
// }


// // STYLING (CSS IN JS)EXAMPLE

// const App = () => {
//   return (
//     <div className="container">
//       <Header />
//     </div>
//   );
// }


import Header from './components/Header';
//2.6.bring in the task component to App.js
import Tasks from './components/Tasks';
//2.15.import moved from Tasks.js into here which will be the global
//state and then we can pass it down into components that we want as props
import { useState } from "react"

const App = () => {

  //2.16.useState moved from Tasks.js into here
  //2.17.useState at top level in order to be used
  //within other components
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at school',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    },
])

  return (
    <div className="container">
      <Header />
      {/* 2.7.bring in the task component to App.js */}
      {/* 2.17.take task and pass them into the task component as a prop */}
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
