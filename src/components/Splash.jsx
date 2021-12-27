import React from 'react';

export default function SplashPage({ user, setModalVisibility }) {
    return (
        <div>
            <p>Howdy {user.name}</p>
            <p>Welcome To The Task Time Tracker</p>
            <button onClick={() => setModalVisibility({visible: 'time-picker'})} >Start A Focus Session</button>
        </div>
    )
}
