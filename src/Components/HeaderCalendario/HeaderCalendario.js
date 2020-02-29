import React, {useState, useEffect} from 'react'
import moment from 'moment'

import './HeaderCalendario.css'

export default function HeaderCalendario(){
    const [weekDays, setWeekDays] = useState([])

    useEffect(()=>{
        function loadWeekDays(){
            setWeekDays(moment.weekdaysShort())
        }

        loadWeekDays()
    },[])

    return(
        <tr className="tableHeader">
            {
                weekDays.map((weekDay)=>(
                    <th key={weekDay} className="headerContent">{weekDay}</th>
                ))    
            }
        </tr>
            
    )
}