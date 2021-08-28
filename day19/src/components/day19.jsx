import React, { useState} from 'react';
import './App.css'
function day19() {

    const [cnt,setCnt]= useState(0);

    return(
        <div>
            <button className="btn" onClick={()=>setCnt(cnt+1)}>{cnt}
            </button>
            
        </div>
    );
}

export default day19;