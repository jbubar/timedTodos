import { useState } from 'react';

export default function TaskLister() {
   
    const [disabled, setDisabled] = useState(false)
  


   
    return (
        <div>
            <p>What Tasks Would You Like To Accomplish?</p>

            {/*List Widget Goes Here*/}

            <button id="proceed" disabled={disabled}>Next</button>
    
        </div>
    )
}
