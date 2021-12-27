import './modal.css'
import {AiOutlineClose} from "react-icons/ai"
import TimePicker from "./modals/TimePicker"
import TaskLister from "./modals/TaskLister"

export default function Modal({ modal, setModalVisibility }) {
    return(
        <div className="modal-overlay" onClick={() => setModalVisibility({visible: false})}>
            <div className="modal-popup" onClick={(e) => e.stopPropagation()}>
                <AiOutlineClose className="x-icon" onClick={() => setModalVisibility({visible: false})}/>
                {modal.visible === 'time-picker' ? <TimePicker  setModalVisibility={setModalVisibility}/> : ''}
                {modal.visible === 'task-lister' ? <TaskLister  setModalVisibility={setModalVisibility}/> : ''}

            </div>
        </div>
    )
}