import React, {useState, useEffect} from 'react'
import moment from 'moment'

import './DaysTable.css'

export default function DaysTable(){
    const [mothDays, setMonthDays] = useState([])
    const [currentDate, setCurrentDate] = useState({})
    const [firstDayMonth, setFirstDayMonth] = useState()
    const [calendarDaysArray, setCalendarDaysArray] = useState([])
    
    useEffect(()=>{
        function insertMonthDays(){
            const monthArray = []
            for(let i=0; i < moment().startOf('month').format('d'); i++){
                monthArray.push('nada')
            }

            for(let i=1; i<= moment().daysInMonth();i++){
                monthArray.push(i)
            }
            setCalendarDaysArray(monthArray)
        }

        setMonthDays(moment().daysInMonth())
        setCurrentDate({
            day:moment().get('date'),
            month: moment().get('month'),
            year:moment().get('year')
        })
        setFirstDayMonth(moment().startOf('month').format('d'))
        
        insertMonthDays()
    },[])
    

    const DaysRenderArray = () =>{
        const nullCounter = calendarDaysArray.reduce((total, element)=>( element=='nada' ? total+1 : total),0)
        
        const renderArray = []
        for(let i = 0; i < nullCounter; i++){
            renderArray.push(<td key="nada" className="tableItem"> nada </td>)
        }
        for(let i=1; i<= moment().daysInMonth();i++){
            renderArray.push(<td key={i} className="tableItem">{i}</td>)
        }

        return renderArray
    }

    let rows = [];
    let cells = [];
    DaysRenderArray().forEach((row,i)=>{
        if(i%7 !== 0){
            cells.push(row)
        }
        else{
            rows.push(cells)
            cells = []
            cells.push(row)
        }
        if(i===calendarDaysArray.length){
            rows.push(cells)
        }
    })

    let days = rows.map((d,i)=>{
        if(i!=0){
            return <tr className="tableItem">{d}</tr>
        }
    })

    return(
        <tbody className="tableBody">
            {days}
        </tbody>
    )
}


const Ignore = {
    /*

<tr className="tableRow">
    {
        nullDaysRenderArray().map((day)=>(
            day
        ))
    }
    {nullDaysRenderArray().length==7 ? null : calendarDaysArray.map((day,index)=>{
        const nullDays = nullDaysRenderArray().length;
        if(index>nullDays && index <= 7){
            return
        }
    })}
</tr>           
    */
}