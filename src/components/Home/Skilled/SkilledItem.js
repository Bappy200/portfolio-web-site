import React from 'react';
import { ProgressBar } from 'react-bootstrap';
function SkilledItem({now, title}) {
    return (
        <div className="skilled">
        <h3>{title} </h3>
        <ProgressBar now={now} label={`${now}%`} />
      </div>
    )
}

export default SkilledItem
