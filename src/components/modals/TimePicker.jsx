import Picker from 'react-mobile-picker';
import { useState } from 'react';

export default function TimePicker(props) {
    const [valueGroups, setValueGroups] = useState({
        hours: 0,
        minutes: 30,
    })
    const [disabled, setDisabled] = useState(false)
    const optionGroups = {
        hours: [0,1,2,3],
        minutes: [0,10,20,30,40,50],
    }

    const handleChange = (name, value) => {
        setValueGroups({
            ...valueGroups,
            [name]: value
        })
        
        if (value === 0 && ((name === "hours" && valueGroups.minutes === 0) || (name === "minutes" && valueGroups.hours === 0 ))) {
            setDisabled(true) 
        } else {
            setDisabled(false)
        }
    }
   
    return (
        <div>
            <p>How long would you like to focus?</p>
            <Picker
                optionGroups={optionGroups}
                valueGroups={valueGroups}
                onChange={handleChange} 
            />
            <p>{valueGroups.hours === 0 ? `${valueGroups.minutes} minutes` : valueGroups.hours === 1 ? `${valueGroups.hours} hour and ${valueGroups.minutes} minutes` : `${valueGroups.hours} hours and ${valueGroups.minutes} minutes`}</p>
            <button disabled={disabled} onClick={() => props.setModalVisibility({visible: 'task-lister'})} >Next</button>
    
        </div>
    )
}
