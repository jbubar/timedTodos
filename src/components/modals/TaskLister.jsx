import { useState } from 'react';

export default function TaskLister() {
   
    const [tasks, setTasks] = useState([
        "take a walk",
        "get a snack",
        "solve global climate change",
        "call the folks",
    ])
  


   
    return (
        <div>
            <p>What Tasks Would You Like To Accomplish?</p>

            {/*List Widget Goes Here*/}
            {tasks.map((task, i) => (
                <div key={`${i}`}>{task}</div>
            ))}
            <button id="proceed" disabled={tasks.length === 0}>Next</button>
    
        </div>
    )
}
